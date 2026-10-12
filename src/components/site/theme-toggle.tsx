"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  className = "",
  label,
}: {
  className?: string;
  label: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  // false during SSR/hydration, true afterwards: avoids an icon mismatch
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${className}`}
    >
      <Sun
        className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-500 ${
          mounted && isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-500 ${
          mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
