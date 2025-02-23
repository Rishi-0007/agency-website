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

export function Navbar() {
  const { theme, setTheme } = useTheme();

  const services = [
    {
      title: "Graphic Design",
      href: "/services/graphic-design",
      description:
        "Creative designs that help you stand out and make a lasting impression.",
      image: "/images/graphic-design.jpg",
      subServices: [
        { name: "Logo Design", href: "/services/graphic-design/logo" },
        { name: "Branding", href: "/services/graphic-design/branding" },
        {
          name: "Print Design",
          href: "/services/graphic-design/print",
        },
      ],
    },
    {
      title: "Web Development",
      href: "/services/web-development",
      description:
        "Custom websites and web applications built with the latest technologies.",
      image: "/images/web-dev.jpg",
      subServices: [
        { name: "E-commerce", href: "/services/web-development/ecommerce" },
        { name: "CMS Development", href: "/services/web-development/cms" },
        { name: "API Integration", href: "/services/web-development/api" },
      ],
    },
    {
      title: "Digital Marketing",
      href: "/services/digital-marketing",
      description:
        "Strategic marketing solutions to boost your online presence and reach.",
      image: "/images/digital-marketing.jpg",
      subServices: [
        { name: "SEO", href: "/services/digital-marketing/seo" },
        {
          name: "Social Media",
          href: "/services/digital-marketing/social-media",
        },
        { name: "PPC", href: "/services/digital-marketing/ppc" },
      ],
    },
    {
      title: "Marketing Services",
      href: "/services/marketing-services",
      description:
        "Comprehensive marketing strategies to grow your business and brand.",
      image: "/images/marketing-services.jpg",
      subServices: [
        { name: "Email Marketing", href: "/services/marketing-services/email" },
        {
          name: "Influencer Marketing",
          href: "/services/marketing-services/influencer",
        },
        { name: "Analytics", href: "/services/marketing-services/analytics" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 mt-2 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={"/images/logo.png"} width={100} height={100} alt="logo" />
          <span className="text-lg font-bold">Dream Design</span>
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
                              <Link
                                key={subService.name}
                                href={subService.href}
                                className="text-xs text-primary hover:underline"
                              >
                                {subService.name}
                              </Link>
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
                <Link href="/about" legacyBehavior passHref>
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
                <Link href="/contact" legacyBehavior passHref>
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

          <Button>
            Get Quote <Headset />
          </Button>
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
          <Sheet>
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
                >
                  Services
                </Link>
                <Link
                  href="/#work"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Contact
                </Link>
                <Button className="mt-4">
                  Get Quote <Headset />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
