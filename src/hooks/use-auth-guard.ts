"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { redirect } from "next/navigation";

export const useAuthGuard = (requireAuth: boolean, redirectTo: string) => {
  const [isReady, setIsReady] = useState(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    // Handle auth logic after hydration
    if (requireAuth && !isAuthenticated) {
      redirect("/login");
    } else if (!requireAuth && isAuthenticated) {
      redirect(redirectTo);
    }
    setIsReady(true);
  }, [isAuthenticated, requireAuth, redirectTo]);

  return isReady;
};

