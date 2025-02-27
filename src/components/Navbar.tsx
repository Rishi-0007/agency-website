"use client"; // Required for client-side interactivity

import Link from "next/link";
import { Moon, Sun, Headset } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const services = [
    {
      title: "Graphic Design",
      href: "/#services",
      description:
        "Creative designs that help you stand out and make a lasting impression.",
      image: "/images/graphic-design.webp",
      subServices: [
        { name: "Logo Design" },
        { name: "Branding" },
        { name: "Print Design" },
      ],
    },
    {
      title: "Web Development",
      href: "/#services",
      description:
        "Custom websites and web applications built with the latest technologies.",
      image: "/images/web-dev.webp",
      subServices: [
        { name: "E-commerce" },
        { name: "CMS Development" },
        { name: "API Integration" },
      ],
    },
    {
      title: "Digital Marketing",
      href: "/#services",
      description:
        "Strategic marketing solutions to boost your online presence and reach.",
      image: "/images/digital-marketing.webp",
      subServices: [{ name: "SEO" }, { name: "Social Media" }, { name: "PPC" }],
    },
    {
      title: "Marketing Services",
      href: "/#services",
      description:
        "Comprehensive marketing strategies to grow your business and brand.",
      image: "/images/marketing.webp",
      subServices: [
        { name: "Email Marketing" },
        { name: "Influencer Marketing" },
        { name: "Analytics" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={"/images/logo.png"} width={100} height={100} alt="logo" />
          <span className="text-lg font-bold">
            Dream<span className="text-red-500">x</span>Design
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    navigationMenuTriggerStyle() && "bg-transparent mx-2"
                  }
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="flex flex-col space-y-2 rounded-lg p-3 hover:bg-muted">
                          <div className="relative h-32 w-full overflow-hidden rounded-md">
                            <Image
                              src={service.image}
                              alt={service.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <h3 className="text-sm font-medium">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.subServices.map((subService) => (
                              <span
                                key={subService.name}
                                className="text-xs text-primary"
                              >
                                {subService.name}
                              </span>
                            ))}
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other Links */}
              <NavigationMenuItem>
                <Link href="/#work" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() && "bg-transparent mx-2"
                    }
                  >
                    Work
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() && "bg-transparent mx-2"
                    }
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() && "bg-transparent mx-2"
                    }
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Link
            href={
              "https://wa.me/917858987979?text=Hello!%20I%27d%20like%20to%20learn%20more%20about%20DreamxDesign%27s%20services.%20Can%20we%20chat%3F"
            }
          >
            <Button>
              Get Quote <Headset />
            </Button>
          </Link>
        </nav>

        {/* Mobile Drawer */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle for Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Menu Icon */}
          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/#services"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <Link
                  href="/#work"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={handleLinkClick}
                >
                  Work
                </Link>
                <Link
                  href="/#about"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>

                <Link
                  href={
                    "https://wa.me/917858987979?text=Hello!%20I%27d%20like%20to%20learn%20more%20about%20DreamxDesign%27s%20services.%20Can%20we%20chat%3F"
                  }
                  onClick={handleLinkClick}
                >
                  <Button className="mt-4 w-full">
                    Get Quote <Headset />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
