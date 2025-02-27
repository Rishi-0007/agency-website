"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text into an array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [cursorPos, setCursorPos] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          transform: "translateY(0px)",
        },
        {
          duration: 0.1,
          delay: stagger(0.06),
          ease: "easeInOut",
          onUpdate: (latest) => {
            // Update cursor position based on animation progress
            setCursorPos(
              latest * words.flatMap((w) => w.text.split("")).length
            );
          },
        }
      );
    }
  }, [animate, isInView, words]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline-flex items-center">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              key={`char-${index}`}
              className={cn(
                "char dark:text-white text-black",
                char === "x" ? word.className : ""
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>

      {/* Cursor moves dynamically with the last letter */}
      <motion.span
        animate={{
          x: `${cursorPos * 0.6}rem`,
          opacity: [1, 1, 0, 0, 1], // Blinking effect
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.4, // Controls blinking speed
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};
