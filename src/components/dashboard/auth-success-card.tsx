import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Sparkles } from "lucide-react";

export function AuthSuccessCard() {
  return (
    <Card className="animate-slide-up-delayed animate-stagger-5 border-0 shadow-lg bg-card/95 backdrop-blur-sm min-h-[300px] sm:min-h-[350px] card-hover">
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
  );
}
