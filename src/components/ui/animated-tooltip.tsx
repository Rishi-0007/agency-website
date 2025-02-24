"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item) => (
        <TooltipItem
          key={item.id}
          item={item}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </>
  );
};

const TooltipItem = ({
  item,
  hoveredIndex,
  setHoveredIndex,
}: {
  item: {
    id: number;
    name: string;
    designation: string;
    image: string;
  };
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const springConfig = { stiffness: 100, damping: 10 };
  const x = useMotionValue(0); // Independent x value for each tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-15, 15]),
    springConfig
  ); // Reduced rotation range
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-25, 25]),
    springConfig
  ); // Reduced translation range

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = (event.target as HTMLImageElement).offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // Set x based on mouse position relative to the image
  };

  return (
    <div
      className="-mr-4 relative group"
      onMouseEnter={() => setHoveredIndex(item.id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        onMouseMove={handleMouseMove}
        height={100}
        width={100}
        src={item.image}
        alt={item.name}
        className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
      />
      <AnimatePresence mode="wait">
        {hoveredIndex === item.id && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
            <div className="font-bold text-white relative z-30 text-base">
              {item.name}
            </div>
            <div className="text-white text-xs">{item.designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
