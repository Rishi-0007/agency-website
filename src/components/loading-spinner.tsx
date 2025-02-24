"use client";

import { ClipLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingSpinner({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-spinner"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-white dark:bg-neutral-900 z-50"
        >
          <ClipLoader color="#3b82f6" size={50} /> {/* Blue spinner */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
