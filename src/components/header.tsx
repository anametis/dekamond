"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { useAuthStore } from "@/stores/auth-store";
import { useAuth } from "@/hooks/use-auth";

export function Header() {
  const { user } = useAuthStore();
  const { handleLogout } = useAuth();

  return (
    <header className="border-b bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-4 min-h-[60px] sm:min-h-[80px]">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0 flex-1">
            <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              {user ? (
                <div className="bg-gradient-to-br from-primary to-accent rounded-full p-0.5 w-full h-full">
                  <Avatar className="size-8 sm:size-10 md:size-12 lg:size-14 border-2 border-background">
                    <AvatarImage
                      src={user.picture.medium || "/placeholder.svg"}
                      alt={`${user.name.first} ${user.name.last}`}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-sm sm:text-lg font-bold">
                      {`${user.name.first[0]}${user.name.last[0]}`.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              ) : (
                <Skeleton className="w-full h-full rounded-full" />
              )}
            </div>
            <div className="space-y-1 hidden md:flex md:flex-col md:justify-center min-h-[60px]">
              {user ? (
                <>
                  <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text leading-tight">
                    Welcome back, {user.name.first}!
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-tight">
                    {user.email}
                  </p>
                </>
              ) : (
                <>
                  <Skeleton className="h-6 md:h-8 w-48" />
                  <Skeleton className="h-4 md:h-5 w-32" />
                </>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <SidebarTrigger className="size-9 flex-shrink-0" />
            <ThemeToggle className="size-9 flex-shrink-0" />
            <div className="h-9 flex-shrink-0">
              {user ? (
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="flex items-center md:space-x-2 h-9 px-4 bg-background/80 backdrop-blur-sm border border-border/50 hover:border-destructive/50 hover:text-destructive hover:bg-destructive/5 transition-all duration-200"
                >
                  <LogOut className="" />
                  <span className="font-medium hidden sm:inline text-xs sm:text-sm">
                    Sign Out
                  </span>
                </Button>
              ) : (
                <Skeleton className="h-9 w-20" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
