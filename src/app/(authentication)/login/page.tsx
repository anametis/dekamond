"use client";

import { RouteGuard } from "@/components/route-guard";
import { LoginForm } from "@/features/login-form";

export default function LoginPage() {

  return (
    <RouteGuard requireAuth={false} redirectTo="/dashboard">
      <LoginForm />
    </RouteGuard>
  );
}
