"use client";

import { Globe, Zap, Palette, Rocket, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click"; // Custom hook for outside click detection
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function Services() {
  const [activeService, setActiveService] = useState<
    (typeof services)[number] | null
  >(null);
  const modalRef = useRef<HTMLDivElement>(null);
  // Close modal on outside click
  useOutsideClick(modalRef as React.RefObject<HTMLDivElement>, () =>
    setActiveService(null)
  );

  const services = [
    {
      title: "Digital Marketing",
      icon: <Zap className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      description:
        "Strategic marketing solutions to boost your online presence and reach.",
      image: "/images/digital-marketing.webp",
      subServices: ["SEO", "Social Media", "PPC", "Content Marketing"],
      color: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-500 dark:border-purple-400",
      content: () => (
        <div className="space-y-4">
          <p>
            Our digital marketing services are designed to help your business
            grow online. From search engine optimization (SEO) to social media
            marketing, we provide comprehensive solutions tailored to your
            needs.
          </p>
          <ul className="list-disc pl-6">
            <li>SEO: Improve your search engine rankings.</li>
            <li>
              Social Media: Engage with your audience on platforms like
              Instagram and Facebook.
            </li>
            <li>PPC: Drive targeted traffic with pay-per-click advertising.</li>
            <li>
              Content Marketing: Create valuable content to attract and retain
              customers.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Web Development",
      icon: <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      description:
        "Custom websites and web applications built with the latest technologies.",
      image: "/images/web-dev.webp",
      subServices: [
        "E-commerce",
        "CMS Development",
        "API Integration",
        "Web Maintenance",
      ],
      color: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-500 dark:border-blue-400",
      content: () => (
        <div className="space-y-4">
          <p>
            We specialize in building responsive, user-friendly websites and web
            applications. Whether you need an e-commerce platform or a custom
            CMS, we&apos;ve got you covered.
          </p>
          <ul className="list-disc pl-6">
            <li>E-commerce: Build online stores that convert.</li>
            <li>CMS Development: Manage your content with ease.</li>
            <li>
              API Integration: Connect your website with third-party services.
            </li>
            <li>Web Maintenance: Keep your site running smoothly.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Graphic Design",
      icon: (
        <Palette className="h-12 w-12 text-green-600 dark:text-green-400" />
      ),
      description: "Creative designs that help your brand stand out.",
      image: "/images/graphic-design.webp",
      subServices: ["Logo Design", "Branding", "Print Design", "UI/UX Design"],
      color: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-500 dark:border-green-400",
      content: () => (
        <div className="space-y-4">
          <p>
            Our graphic design services are tailored to create visually stunning
            and impactful designs that resonate with your audience. From logos
            to branding, we bring your vision to life.
          </p>
          <ul className="list-disc pl-6">
            <li>Logo Design: Create a memorable brand identity.</li>
            <li>Branding: Develop a cohesive brand strategy.</li>
            <li>Print Design: Design brochures, flyers, and more.</li>
            <li>
              UI/UX Design: Enhance user experience with intuitive designs.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Marketing Services",
      icon: (
        <Rocket className="h-12 w-12 text-orange-600 dark:text-orange-400" />
      ),
      description:
        "Comprehensive marketing strategies to grow your business and brand.",
      image: "/images/marketing.webp",
      subServices: [
        "Email Marketing",
        "Influencer Marketing",
        "Analytics",
        "Campaign Management",
      ],
      color: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-500 dark:border-orange-400",
      content: () => (
        <div className="space-y-4">
          <p>
            Our marketing services are designed to help you reach your target
            audience and achieve your business goals. From email campaigns to
            influencer partnerships, we&apos;ve got you covered.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Email Marketing: Engage your audience with personalized emails.
            </li>
            <li>
              Influencer Marketing: Partner with influencers to boost your
              brand.
            </li>
            <li>Analytics: Track and optimize your marketing performance.</li>
            <li>Campaign Management: Plan and execute successful campaigns.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-6 md:py-12 lg:py-18 xl:py-24 rounded-tl-3xl rounded-tr-3xl bg-[#fafafa] dark:bg-background"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -mt-16 z-0">
        <svg
          className="relative block w-full h-20 text-[#fafafa] dark:text-background"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,256L48,224C96,192,192,128,288,117.3C384,107,480,149,576,170.7C672,192,768,192,864,170.7C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer comprehensive digital solutions to help your business
              grow and succeed in the digital age.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              layoutId={`card-${service.title}`}
              onClick={() => setActiveService(service)}
              className="h-full"
            >
              <Card
                className={`cursor-pointer hover:shadow-lg transition-shadow h-full border-2 ${service.borderColor} ${service.color} flex flex-col`}
              >
                <CardHeader className="flex flex-col items-center text-center p-6 flex-grow">
                  <div className="flex justify-center text-3xl mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl md:text-2xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm md:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Active Service */}
      <AnimatePresence mode="wait">
        {activeService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setActiveService(null)}
            />
            <div className="fixed inset-0 flex items-center justify-center z-[100] p-4 overflow-y-auto">
              <motion.div
                layoutId={`card-${activeService.title}`}
                ref={modalRef}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-xl overflow-hidden relative mx-2 my-4 md:my-0"
              >
                {/* Close button for mobile */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveService(null)}
                  className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </motion.button>

                <motion.div
                  layoutId={`image-${activeService.title}`}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <CardContent className="p-6 md:p-8 pb-8">
                  <motion.h3
                    layoutId={`title-${activeService.title}`}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold"
                  >
                    {activeService.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${activeService.description}`}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground mt-2"
                  >
                    {activeService.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mt-6"
                  >
                    {activeService.content()}
                  </motion.div>

                  {/* Mobile-friendly close button at bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mt-8 flex justify-center md:hidden"
                  >
                    <button
                      onClick={() => setActiveService(null)}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                </CardContent>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
