"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "framer-motion";

function Hero() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 5,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  const words = [
    {
      text: "Transform",
    },
    {
      text: "your",
    },
    {
      text: "digital",
    },
    {
      text: "presence",
    },
    {
      text: "with",
    },
    {
      text: "Dream Design.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section className="w-full py-6 md:py-12 lg:py-18 xl:py-18 bg-gradient-to-b from-background to-muted mt-16">
      <div className=" px-4 md:px-6">
        <div className="hidden md:flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
          <p className="text-muted-foreground ml-6 font-bold">
            10K+ Satisfied Customer
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed my-4"
          >
            The road to freedom starts from here
          </motion.p>

          <TypewriterEffect words={words} />
          <DotLottieReact
            src="https://lottie.host/0f68e452-17e1-4635-a7b8-17e0d7be135c/7x2A85KgpZ.lottie"
            loop
            autoplay
            style={{ width: "100%", minWidth: "600px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
