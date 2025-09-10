"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle, Shield, Zap, Sparkles, TrendingUp } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";
import { STATS_DATA, ACTION_ITEMS } from "@/constants/dashboard";
import { ActionItem } from "@/components/action-item";

export function DashboardContent() {
  const { user } = useAuthStore();
  if (!user) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 gradient-bg min-h-screen">
        {/* Header skeleton */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Skeleton className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl" />
            <Skeleton className="h-6 sm:h-8 md:h-10 w-48 sm:w-64" />
            <Skeleton className="h-4 w-4 sm:h-5 sm:w-5 rounded-full" />
          </div>
          <Skeleton className="h-4 sm:h-5 md:h-6 w-96 sm:w-[500px]" />
        </div>

        {/* Stats grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden border-0 shadow-lg bg-card/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 min-h-[140px] sm:min-h-[160px]"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-8 rounded-xl" />
              </div>
              <div className="space-y-2">
                <div className="flex items-end justify-between gap-2">
                  <Skeleton className="h-6 sm:h-8 md:h-10 w-16 sm:w-20" />
                  <Skeleton className="h-5 w-12 rounded-full" />
                </div>
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="border-0 shadow-lg bg-card/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 min-h-[300px] sm:min-h-[350px]">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Skeleton className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl" />
              <Skeleton className="h-5 sm:h-6 md:h-7 w-40 sm:w-48" />
              <Skeleton className="h-3 w-3 sm:h-4 sm:w-4 rounded-full" />
            </div>
            <Skeleton className="h-4 sm:h-5 w-80 sm:w-96 mb-4" />
            <div className="space-y-3 sm:space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 sm:p-3 bg-muted/30 rounded-xl gap-2"
                >
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="border-0 shadow-lg bg-card/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 min-h-[300px] sm:min-h-[350px]">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Skeleton className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl" />
              <Skeleton className="h-5 sm:h-6 md:h-7 w-32 sm:w-40" />
            </div>
            <Skeleton className="h-4 sm:h-5 w-64 sm:w-80 mb-4" />
            <div className="space-y-3 sm:space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 border-2 border-border/50 rounded-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Skeleton className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 gradient-bg min-h-screen">
      <div className="mb-8 sm:mb-12 animate-fade-in">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-primary to-primary/80 rounded-xl">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-foreground" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Dashboard Overview
          </h2>
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent animate-pulse flex-shrink-0" />
        </div>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
          Here is a comprehensive overview of your account status and recent
          activity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {STATS_DATA.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="relative overflow-hidden animate-slide-up border-0 shadow-lg bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 btn-hover-lift min-h-[140px] sm:min-h-[160px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2 sm:pb-3">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-xs sm:text-sm font-semibold text-muted-foreground truncate">
                    {stat.title}
                  </CardTitle>
                  <div
                    className={`p-2 sm:p-3 rounded-xl ${stat.color} shadow-sm flex-shrink-0`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <div className="flex items-end justify-between gap-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground truncate">
                    {stat.value}
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-accent/10 text-accent border-accent/20 flex-shrink-0"
                  >
                    {stat.trend}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <Card
          className="animate-slide-up border-0 shadow-lg bg-card/95 backdrop-blur-sm min-h-[300px] sm:min-h-[350px]"
          style={{ animationDelay: "0.4s" }}
        >
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
              <div className="p-1.5 sm:p-2 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-xl flex-shrink-0">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="truncate">Authentication Success</span>
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent animate-pulse flex-shrink-0" />
            </CardTitle>
            <CardDescription className="text-sm sm:text-base leading-relaxed">
              You have successfully logged in to your secure account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/30 rounded-xl gap-2">
                <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                  Login Method
                </span>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 text-xs flex-shrink-0"
                >
                  Mobile Number
                </Badge>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/30 rounded-xl gap-2">
                <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                  Security Status
                </span>
                <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm text-xs flex-shrink-0">
                  <Shield className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                  Secure
                </Badge>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-muted/30 rounded-xl gap-2">
                <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                  Session Type
                </span>
                <Badge
                  variant="outline"
                  className="border-accent/30 text-accent text-xs flex-shrink-0"
                >
                  <Zap className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                  Client-side
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-slide-up border-0 shadow-lg bg-card/95 backdrop-blur-sm min-h-[300px] sm:min-h-[350px]">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
              <div className="p-1.5 sm:p-2 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex-shrink-0">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent" />
              </div>
              <span className="truncate">Quick Actions</span>
            </CardTitle>
            <CardDescription className="text-sm sm:text-base leading-relaxed">
              Common tasks you might want to perform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {ACTION_ITEMS.map((item, index) => (
                <ActionItem key={index} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
