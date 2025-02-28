"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted dark:bg-black">
      <div className="px-4 md:px-6 py-12">
        <div className="flex flex-col items-center justify-center flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 flex flex-row items-center gap-2"
          >
            {" "}
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
            <p className="font-bold">
              Dream<span className="text-red-500">x</span>Design
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61573714854623"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="border-2 border-muted-foreground rounded-full p-1">
                  <SocialIcon
                    network="facebook"
                    style={{ height: 45, width: 45 }}
                    fgColor="currentColor"
                    bgColor="transparent"
                    className="text-muted-foreground hover:text-primary"
                  />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/dreamxdesign.pro/?hl=en"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="border-2 border-muted-foreground rounded-full p-1">
                  <SocialIcon
                    network="instagram"
                    style={{ height: 45, width: 45 }}
                    fgColor="currentColor"
                    bgColor="transparent"
                    className="text-muted-foreground hover:text-primary"
                  />
                </div>
              </Link>
              <Link
                href="https://wa.me/917858987979?text=Hello!%20I%27d%20like%20to%20learn%20more%20about%20DreamxDesign%27s%20services.%20Can%20we%20chat%3F"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="border-2 border-muted-foreground rounded-full p-1">
                  <SocialIcon
                    network="whatsapp"
                    style={{ height: 45, width: 45 }}
                    fgColor="currentColor"
                    bgColor="transparent"
                    className="text-muted-foreground hover:text-primary"
                  />
                </div>
              </Link>
              <Link
                href="mailto:dreamxdesignpro@gmail.com"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="border-2 border-muted-foreground rounded-full p-1">
                  <SocialIcon
                    network="email"
                    style={{ height: 45, width: 45 }}
                    fgColor="currentColor"
                    bgColor="transparent"
                    className="text-muted-foreground hover:text-primary"
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t pt-8 text-center text-muted-foreground"
        >
          <p>© 2025 DreamxDesign. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
