"use client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthGuard } from "@/hooks/use-auth-guard";

export default function RootPage() {
  const isReady = useAuthGuard(true, "/dashboard");

  if (!isReady) return <LoadingSpinner />;

  return null;
}
