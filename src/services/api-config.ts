import { ERROR_MESSAGES, HttpStatusCode } from "@/constants/errors";
import { toast } from "sonner";

// ================================ Types ================================ //
export interface RequestConfig extends RequestInit {
  timeout?: number;
  url?: string;
}

export interface FetchResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: RequestConfig;
}

export interface FetchError extends Error {
  response?: FetchResponse<unknown>;
  config?: RequestConfig;
  code?: string;
}

// ================================ Request Interceptor ================================ //
export const requestInterceptor = (config: RequestConfig): RequestConfig => {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `🚀 ${config.method?.toUpperCase() || "GET"} ${config.url || ""}`
    );
  }
  return config;
};

// ================================ Response Interceptor ================================ //
export const responseInterceptor = <T>(
  response: FetchResponse<T>
): FetchResponse<T> => {
  if (process.env.NODE_ENV === "development") {
    console.log(`${response.status} ${response.config.url || ""}`);
  }
  return response;
};

export const errorInterceptor = async (error: FetchError): Promise<never> => {
  // Only show toasts in browser environment
  if (typeof window === "undefined") {
    return Promise.reject(error);
  }

  if (process.env.NODE_ENV === "development") {
    console.error(
      `${error.response?.status || "Network"} ${error.config?.url || ""}`
    );
  }

  if (error.response) {
    const { status } = error.response;

    // ===== Specific status codes ===== //
    if (status in ERROR_MESSAGES) {
      const message = ERROR_MESSAGES[status as HttpStatusCode];
      toast.error(message.title, { description: message.description });
    }
    // ===== Server errors (5xx) ===== //
    else if (status >= 500) {
      toast.error("Server Error", {
        description: "Our servers are having issues. Please try again later.",
      });
    }
    // ===== User errors (4xx) ===== //
    else if (status >= 400 && !(status in ERROR_MESSAGES)) {
      toast.error("Request Failed", {
        description: "Something went wrong with your request.",
      });
    }
  } else {
    // ===== Network errors, timeouts, etc. ===== //
    const isTimeout =
      error.code === "AbortError" || error.name === "AbortError";

    if (isTimeout) {
      toast.error("Request Timeout", {
        description: "The request took too long. Please try again.",
      });
    } else {
      toast.error("Connection Error", {
        description: "Please check your internet connection and try again.",
      });
    }
  }

  return Promise.reject(error);
};
