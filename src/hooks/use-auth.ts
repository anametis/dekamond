import { User } from "@/interfaces/random-user-interface";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";

// ** This hook is used for authentication related logic(not just simple state management)
export const useAuth = () => {
  const router = useRouter();
  const { user, isAuthenticated, clearUser } = useAuthStore();

  const handleLogout = () => {
    clearUser();
    router.push("/");
  };

  // const handleLogin = () => {
  //   router.push("/login");
  // };

  return { user, isAuthenticated, handleLogout };
};
