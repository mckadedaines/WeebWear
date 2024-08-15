"use client";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const Meteors = ({ number = 70 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  const generateMeteorStyles = () => {
    return [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * window.innerHeight) + "px",
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 16 + 10) + "s",
    }));
  };

  useEffect(() => {
    const updateMeteors = () => setMeteorStyles(generateMeteorStyles());

    updateMeteors();
    window.addEventListener("resize", updateMeteors);

    return () => window.removeEventListener("resize", updateMeteors);
  }, [number]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute rotate-[215deg] animate-meteor rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={{
            ...style,
            width: "5px",
            height: "5px",
          }}
        >
          <div className="absolute top-1/2 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-400 to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
