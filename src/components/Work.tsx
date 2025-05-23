"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import createGlobe, { COBEOptions } from "cobe";
import { motion } from "framer-motion";

export function WorkSection() {
  const projects = [
    {
      title: "Reel",
      description: "Reels for a client",
      skeleton: <ReelSkeleton />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Photo Series",
      description: "Studio photography and images for our clients",
      skeleton: <PhotoGridSkeleton />,
      className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
    },
    {
      title: "YouTube: Stream Element",
      description: "A video played between breaks on a streaming platform",
      skeleton: <YouTubeSkeleton />,
      className: "col-span-1 lg:col-span-4 border dark:border-neutral-800",
    },
    {
      title: "Global Reach",
      description: "We work with clients across the globe",
      skeleton: <GlobeSkeleton />,
      className: "col-span-1 lg:col-span-2",
    },
  ];

  return (
    <div id="work" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8 flex flex-col items-center justify-center space-y-4">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white"
        >
          Our Creative Portfolio
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[600px] text-muted-foreground md:text-xl/relaxed text-center"
        >
          Explore our diverse range of photography and videography projects that
          showcase our creative expertise and technical excellence.
        </motion.p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {projects.map((project) => (
            <ProjectCard key={project.title} className={project.className}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <div className="h-full w-full">{project.skeleton}</div>
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const ProjectTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const ProjectDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-500 font-normal dark:text-neutral-300 my-2">
      {children}
    </p>
  );
};

const ReelSkeleton = () => {
  const videos = ["/work/reel1.mp4", "/work/reel2.mp4"];

  return (
    <div className="grid grid-cols-2 gap-4 h-full w-full pb-12">
      {videos.map((video, idx) => (
        <div key={idx} className="relative h-full">
          <video
            src={video}
            className="w-full h-full rounded-lg object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="none"
            style={{ height: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

const PhotoGridSkeleton = () => {
  const images = [
    "/work/p1.jpg",
    "/work/p2.png",
    "/work/p3.jpg",
    "/work/p4.jpg",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {images.map((image, idx) => (
        <div key={idx} className="relative aspect-square">
          <Image
            src={image}
            alt="Project photo"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

const YouTubeSkeleton = () => {
  const videoId = "XvxHgz8dB8s";

  return (
    <div className="relative h-full mt-4">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-sm"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

function GlobeSkeleton() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const isMobile = window.innerWidth < 768;
    let phi = 0;

    const markers = [
      { location: [28.6139, 77.209], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.03 },
      { location: [22.5726, 88.3639], size: 0.03 },
      { location: [51.5074, -0.1278], size: 0.03 },
      { location: [40.7128, -74.006], size: 0.03 },
      { location: [35.6762, 139.6503], size: 0.03 },
      { location: [1.3521, 103.8198], size: 0.03 },
    ];

    const desktopConfig = {
      devicePixelRatio: 2,
      width: 750,
      height: 750,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 6000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      markers,
      onRender: (state: { phi: number }) => {
        state.phi = phi;
        phi += 0.01;
      },
    };

    const mobileSize = canvasRef.current.clientWidth || 600;
    const mobileConfig = {
      devicePixelRatio: 1,
      width: mobileSize,
      height: mobileSize,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 3000,
      mapBrightness: 4,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      markers,
      onRender: (state: { phi: number }) => {
        state.phi = phi;
        phi += 0.01;
      },
    };

    const config = isMobile ? mobileConfig : desktopConfig;
    const globe = createGlobe(canvasRef.current, config as COBEOptions);

    return () => globe.destroy();
  }, []);

  // Wrap the canvas in a square container that maintains a 1:1 ratio
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        paddingTop: "100%", // creates a square container
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
