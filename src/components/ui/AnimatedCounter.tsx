"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  className = "",
  duration = 2.0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    // Extract numerical portion and suffix
    const numericMatch = value.match(/([\d,]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const rawNumStr = numericMatch[1];
    const targetNumber = parseInt(rawNumStr.replace(/,/g, ""), 10);
    const hasCommas = rawNumStr.includes(",");
    const prefix = value.slice(0, numericMatch.index);
    const suffix = value.slice((numericMatch.index || 0) + rawNumStr.length);

    const controls = animate(0, targetNumber, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth natural deceleration
      onUpdate(latest) {
        const rounded = Math.round(latest);
        const formatted = hasCommas
          ? rounded.toLocaleString()
          : rounded.toString();
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      },
      onComplete() {
        setDisplayValue(value);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
