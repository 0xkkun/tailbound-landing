"use client";

import { useState, useEffect, useRef } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");
  const dismissed = useRef(false);

  useEffect(() => {
    const done = () => {
      if (dismissed.current) return;
      dismissed.current = true;
      setPhase("fading");
      setTimeout(() => setPhase("gone"), 600);
    };

    if (document.readyState === "complete") {
      setTimeout(done, 300);
      return;
    }

    const onLoad = () => setTimeout(done, 300);
    window.addEventListener("load", onLoad);
    const timer = setTimeout(done, 4000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0C] pointer-events-none"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <img
        src="/title.png"
        alt="Tailbound"
        className="w-[min(66vw,320px)] h-auto pixel-art mb-8"
      />
      <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-[#E39F54] rounded-full animate-loading-bar" />
      </div>
    </div>
  );
}
