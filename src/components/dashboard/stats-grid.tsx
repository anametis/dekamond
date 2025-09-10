import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { STATS_DATA } from "@/constants/dashboard";

export function StatsGrid() {
  return (
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
  );
}
