"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NavigationContextType {
  hasInternalHistory: () => boolean;
}

const NavigationContext = createContext<NavigationContextType>({
  hasInternalHistory: () => false,
});

export function useNavigation() {
  return useContext(NavigationContext);
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const internalNavCount = useRef(0);
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    if (previousPathname.current === null) {
      // First render — record the initial pathname but don't count it as a navigation
      previousPathname.current = pathname;
    } else if (previousPathname.current !== pathname) {
      // The pathname changed, meaning the user navigated internally
      internalNavCount.current += 1;
      previousPathname.current = pathname;
    }
  }, [pathname]);

  const hasInternalHistory = () => internalNavCount.current > 0;

  return <NavigationContext.Provider value={{ hasInternalHistory }}>{children}</NavigationContext.Provider>;
}
