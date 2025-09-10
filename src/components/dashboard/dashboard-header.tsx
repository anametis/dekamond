import { TrendingUp, Sparkles } from "lucide-react";

export function DashboardHeader() {
  return (
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
  );
}
