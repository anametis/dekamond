import { ACTION_ITEMS } from "@/constants/dashboard";

export function ActionItem({ item }: { item: (typeof ACTION_ITEMS)[number] }) {
  const Icon = item.icon;
  return (
    <div
      className={`p-3 sm:p-4 border-2 border-border/50 rounded-xl hover:${item.color} transition-all duration-200 cursor-pointer btn-hover-lift`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className={`p-1.5 sm:p-2 ${item.iconColor} rounded-lg flex-shrink-0`}
        >
          <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-xs sm:text-sm text-foreground truncate">
            {item.title}
          </div>
          <div className="text-xs text-muted-foreground truncate">
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
}
