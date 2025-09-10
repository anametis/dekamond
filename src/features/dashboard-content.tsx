"use client";

import { AuthSuccessCard } from "@/components/dashboard/auth-success-card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton";
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { useAuthStore } from "@/stores/auth-store";


export function DashboardContent() {
  const { user } = useAuthStore();

  if (!user) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 gradient-bg min-h-screen">
      <DashboardHeader />
      <StatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <AuthSuccessCard />
        <QuickActionsCard />
      </div>
    </div>
  );
}
