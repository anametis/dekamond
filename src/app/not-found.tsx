"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { ThemeToggle } from "@/components/common/theme-toggle";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg px-4 py-8 sm:py-12">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader className="space-y-3 sm:space-y-4 text-center pb-6 sm:pb-8 px-4 sm:px-6">
          {/* Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative p-4 sm:p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl sm:rounded-3xl shadow-lg border border-destructive/20">
              <AlertTriangle className="h-8 w-8 sm:h-12 sm:w-12 text-destructive" />
            </div>
          </div>

          {/* Error Code */}
          <div className="space-y-2">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-destructive/20 select-none">
              404
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Page Not Found
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2 sm:px-4">
              Oops! The page you&apos;re looking for seems to have vanished into
              the digital void.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/login" className="w-full">
              <Button className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold btn-hover-lift shadow-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Go to Home
              </Button>
            </Link>

            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold btn-hover-lift shadow-lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="text-center space-y-2 sm:space-y-3 pt-2 sm:pt-4">
            <p className="text-xs sm:text-sm text-muted-foreground px-2">
              Don&apos;t worry, even the best explorers sometimes take a wrong
              turn!
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground px-2">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-center">
                Try checking the URL or use the navigation menu
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
