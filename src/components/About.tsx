"use client";

import { CheckCircle } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <DotLottieReact
            src="https://lottie.host/5431775f-d473-49be-a5ab-4d37b07b249d/uDLEAkNPXT.lottie"
            loop
            autoplay
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto  tracking-tight font-medium text-black dark:text-white">
                About Us
              </h4>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                We&apos;re a team of passionate digital creators committed to
                delivering exceptional results for our clients.
              </p>
            </div>
            <ul className="grid gap-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>10+ years of industry experience</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>100+ successful projects delivered</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Award-winning design team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
