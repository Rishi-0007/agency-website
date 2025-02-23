"use client";

import BrandRibbon from "./BrandRibbon";
import { motion } from "framer-motion";
export function Clients() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="px-8 flex flex-col items-center justify-center space-y-4">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
        >
          Our Clients
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[600px] text-muted-foreground md:text-xl/relaxed text-center"
        >
          We have worked with some of the most prestigious companies in the
          world.
        </motion.p>
      </div>
      <BrandRibbon />
    </div>
  );
}
