import { CheckCircle, Clock, Users, Activity, Shield } from "lucide-react";

export const STATS_DATA = [
  {
    title: "Active Sessions",
    value: "1",
    description: "Current login session",
    icon: Activity,
    color: "bg-gradient-to-br from-primary/20 to-primary/10 text-primary",
    trend: "+100%",
  },
  {
    title: "Account Status",
    value: "Verified",
    description: "Your account is active",
    icon: CheckCircle,
    color:
      "bg-gradient-to-br from-green-500/20 to-green-400/10 text-green-700 dark:text-green-400",
    trend: "Secure",
  },
  {
    title: "Last Login",
    value: "Just now",
    description: "Recent activity",
    icon: Clock,
    color:
      "bg-gradient-to-br from-blue-500/20 to-blue-400/10 text-blue-700 dark:text-blue-400",
    trend: "Live",
  },
  {
    title: "User Type",
    value: "Standard",
    description: "Account privileges",
    icon: Users,
    color:
      "bg-gradient-to-br from-purple-500/20 to-purple-400/10 text-purple-700 dark:text-purple-400",
    trend: "Active",
  },
] as const;

export const ACTION_ITEMS = [
  {
    title: "Update Profile",
    description: "Modify your account information",
    icon: Users,
    color: "border-primary/50 hover:border-primary/50 hover:bg-primary/5",
    iconColor: "bg-primary/10 text-primary",
  },
  {
    title: "Security Settings",
    description: "Manage your account security",
    icon: Shield,
    color: "border-accent/50 hover:border-accent/50 hover:bg-accent/5",
    iconColor: "bg-accent/10 text-accent",
  },
  {
    title: "View Activity",
    description: "Check your recent login history",
    icon: Activity,
    color: "border-blue-500/50 hover:border-blue-500/50 hover:bg-blue-500/5",
    iconColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
] as const;
