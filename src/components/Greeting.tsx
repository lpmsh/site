"use client";

import { useState, useEffect } from "react";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 5) return "Up late? I'm Liam Monaghan";
  if (hour < 12) return "Good morning, I'm Liam Monaghan";
  if (hour < 17) return "Good afternoon, I'm Liam Monaghan";
  if (hour < 21) return "Good evening, I'm Liam Monaghan";
  return "Up late? I'm Liam Monaghan";
}

export default function Greeting() {
  const [greeting, setGreeting] = useState("Liam Monaghan");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return <>{greeting}</>;
}
