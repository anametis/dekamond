import { useEffect, useState } from "react";

export const useHydration = (callback?: () => void): boolean => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
    callback?.();
  }, [callback]);

  return hasHydrated;
};
