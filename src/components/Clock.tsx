"use client";

import { useEffect, useState } from "react";

function getGreeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const greeting = getGreeting(time.getHours());
  const formatted = time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className="fixed bottom-8 right-8 text-xs text-neutral-300">
      {greeting}, it&apos;s {formatted}
    </div>
  );
}
