"use client";

import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/utils/utils.ts";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 4500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2 "
    style={{
    WebkitMaskImage:
      'linear-gradient(to top, transparent 0%, black 10%, black 90%, transparent 100%)',
    maskImage:
      'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
    }}>
        
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
