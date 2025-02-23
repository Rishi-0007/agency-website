"use client";

import { Facebook, Instagram, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
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
            <p className="font-bold">Dream Design</p>
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
                href="https://facebook.com"
                target="_blank"
                className="p-2 rounded-full border border-muted-foreground hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-full border border-muted-foreground hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                className="p-2 rounded-full border border-muted-foreground hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hello@agency.com"
                target="_blank"
                className="p-2 rounded-full border border-muted-foreground hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
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
          <p>© 2024 Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
