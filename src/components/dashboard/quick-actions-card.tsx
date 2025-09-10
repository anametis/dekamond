import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap } from "lucide-react";
import { ACTION_ITEMS } from "@/constants/dashboard";
import { ActionItem } from "@/components/common/action-item";

export function QuickActionsCard() {
  return (
    <Card className="animate-slide-up-delayed animate-stagger-6 border-0 shadow-lg bg-card/95 backdrop-blur-sm min-h-[300px] sm:min-h-[350px] card-hover">
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
  );
}
