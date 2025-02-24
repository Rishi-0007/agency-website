"use client";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";

export function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // Hide spinner when the site is fully loaded
    };

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      {children}
    </>
  );
}
