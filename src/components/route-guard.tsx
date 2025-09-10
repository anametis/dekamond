"use client";

import { LoadingSpinner } from "./ui/loading-spinner";
import { useAuthGuard } from "@/hooks/use-auth-guard";

export const RouteGuard: React.FC<{
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}> = ({ children, requireAuth = false, redirectTo = "/dashboard" }) => {
  const isReady = useAuthGuard(requireAuth, redirectTo);

  if (!isReady) {
    return <LoadingSpinner />;
  }

  return children;
};
