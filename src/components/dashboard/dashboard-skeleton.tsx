import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
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
