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

  // A stack of the pathnames visited within this app session, representing how
  // deep we are from the page the user first landed on. The entry page sits at
  // the bottom of the stack, so a length > 1 means there is somewhere inside the
  // app to go back to. We track this by observing pathname transitions instead
  // of inspecting browser history, so it never depends on the timing of Next's
  // own history.pushState and can never walk the user back out to an external
  // referring site.
  const stack = useRef<string[]>([]);

  useEffect(() => {
    const s = stack.current;

    if (s.length === 0) {
      // First page of the session — the entry point.
      s.push(pathname);
      return;
    }

    if (s[s.length - 1] === pathname) {
      // Same path (e.g. a query/hash change) — not a navigation.
      return;
    }

    if (s.length >= 2 && s[s.length - 2] === pathname) {
      // Returning to the previous page — a back navigation.
      s.pop();
    } else {
      // Moving to a new page — a forward navigation.
      s.push(pathname);
    }
  }, [pathname]);

  const hasInternalHistory = () => stack.current.length > 1;

  return <NavigationContext.Provider value={{ hasInternalHistory }}>{children}</NavigationContext.Provider>;
}
