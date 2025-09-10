import { RandomUserApiResponse } from "@/interfaces/random-user-interface";
import {
  errorInterceptor,
  FetchError,
  FetchResponse,
  RequestConfig,
  requestInterceptor,
  responseInterceptor,
} from "./api-config";

// ================================ API Configuration ================================ //
const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.trim() || "https://randomuser.me/api";
const API_TIMEOUT_MS = Number(
  process.env.NEXT_PUBLIC_API_TIMEOUT_MS?.trim() || "10000"
);

// ================================ Fetch Wrapper ================================ //
class ApiClient {
  private baseURL: string;
  private defaultTimeout: number;

  constructor(baseURL: string = "", timeout: number = 10000) {
    this.baseURL = baseURL;
    this.defaultTimeout = timeout;
  }

  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<FetchResponse<T>> {
    const { timeout = this.defaultTimeout, ...fetchConfig } = config;

    const interceptedConfig = requestInterceptor({
      ...fetchConfig,
      url: `${this.baseURL}${endpoint}`,
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url, {
        ...interceptedConfig,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          ...interceptedConfig.headers,
        },
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      const fetchResponse: FetchResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        config: interceptedConfig,
      };

      if (!response.ok) {
        const error: FetchError = new Error(
          `HTTP ${response.status}: ${response.statusText}`
        );
        error.response = fetchResponse;
        error.config = interceptedConfig;
        throw error;
      }

      return responseInterceptor(fetchResponse);
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error && error.name === "AbortError") {
        const timeoutError: FetchError = new Error("Request timeout");
        timeoutError.code = "AbortError";
        timeoutError.config = interceptedConfig;
        return errorInterceptor(timeoutError);
      }

      if (error && typeof error === "object" && "response" in error) {
        return errorInterceptor(error as FetchError);
      }

      const networkError: FetchError = new Error(
        error instanceof Error ? error.message : "Network error"
      );
      networkError.config = interceptedConfig;
      return errorInterceptor(networkError);
    }
  }

  // ================================ HTTP Methods ================================ //
  async get<T>(
    endpoint: string,
    config?: RequestConfig
  ): Promise<FetchResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "GET" });
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<FetchResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<FetchResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(
    endpoint: string,
    config?: RequestConfig
  ): Promise<FetchResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "DELETE" });
  }

  async patch<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<FetchResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // ================================ API Calls ================================ //
  async getUser(): Promise<FetchResponse<RandomUserApiResponse>> {
    return this.get<RandomUserApiResponse>("/?results=1&nat=us");
  }
}

const apiClient = new ApiClient(
  API_BASE_URL,
  Number.isFinite(API_TIMEOUT_MS) ? API_TIMEOUT_MS : 10000
);

export default apiClient;
