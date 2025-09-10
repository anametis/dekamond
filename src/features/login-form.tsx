"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/common/theme-toggle";
import {
  validateMobileNumber,
  formatMobileNumber,
  getValidationHint,
} from "@/lib/validation";
import { useAuthStore } from "@/stores/auth-store";
import { useDebounce } from "@/hooks/use-debounce";
import type { RandomUserApiResponse } from "@/interfaces/random-user-interface";
import { FetchError, FetchResponse } from "@/services/api-config";
import apiClient from "@/services/api";

export function LoginForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const debouncedMobileNumber = useDebounce(mobileNumber, 300);
  const validation = validateMobileNumber(debouncedMobileNumber);
  const validationHint = getValidationHint(debouncedMobileNumber);
  const isValid = validation.isValid && debouncedMobileNumber.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isValid) {
      setError(validation.error || "Invalid mobile number format");
      return;
    }

    setIsLoading(true);

    try {
      const response: FetchResponse<RandomUserApiResponse> =
        await apiClient.getUser();
      const user = response.data.results[0];
      setUser(user);
      router.push("/dashboard");
    } catch (err) {
      const apiError = err as FetchError;
      setError(`${apiError.message}`);
      console.error("Login error:", apiError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatMobileNumber(e.target.value);
    setMobileNumber(formatted);
    if (error) setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md animate-fade-in shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader className="space-y-2 text-center pb-8">
          <div className="flex justify-center mb-6">
            <div className="relative p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base leading-relaxed px-2">
            Enter your mobile number to access your secure account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label
                htmlFor="mobile"
                className="text-sm font-semibold text-foreground"
              >
                Mobile Number
              </Label>
              <div className="relative">
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="09123456789"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  className={`w-full h-12 pl-4 pr-4 text-base border-2 transition-all duration-200 bg-input/50 ${
                    error
                      ? "border-destructive/50 focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                      : isValid && debouncedMobileNumber.length > 0
                      ? "border-green-500/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      : "border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  }`}
                  disabled={isLoading}
                  aria-describedby={
                    error
                      ? "mobile-error"
                      : validationHint
                      ? "mobile-hint"
                      : undefined
                  }
                />
                {isValid && debouncedMobileNumber.length > 0 && !error && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {error && (
                <Alert
                  variant="destructive"
                  className="mt-3 animate-slide-up border-destructive/50 bg-destructive/5"
                >
                  <AlertDescription id="mobile-error" className="text-sm">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              {validationHint && !error && debouncedMobileNumber.length > 0 && (
                <div
                  className="mt-2 text-xs text-muted-foreground animate-fade-in"
                  id="mobile-hint"
                >
                  {validationHint}
                </div>
              )}
            </div>

            <Button
              type="submit"
              className={`w-full h-12 text-base font-semibold btn-hover-lift shadow-lg transition-all duration-200 ${
                isValid && debouncedMobileNumber.length > 0 && !error
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  : "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              }`}
              disabled={
                isLoading ||
                !mobileNumber.trim() ||
                (mobileNumber.length > 0 && !isValid)
              }
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Phone className="mr-2 h-5 w-5" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed px-4">
              Supported formats:{" "}
              <span className="font-medium text-foreground">09xxxxxxxxx</span>,{" "}
              <span className="font-medium text-foreground">+989xxxxxxxxx</span>
              ,{" "}
              <span className="font-medium text-foreground">
                00989xxxxxxxxx
              </span>
            </p>
            <p className="text-xs text-muted-foreground mt-2 px-4">
              Enter your mobile number and we&apos;ll validate it in real-time
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
