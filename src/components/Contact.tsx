"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section id="contact" className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -mt-16 z-0">
        <svg
          className="relative block w-full h-20 text-[#fafafa] dark:text-background"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            We&apos;d love to hear from you! Whether you have a question, a
            project idea, or just want to say hello, feel free to reach out.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                We&apos;re here to help! Reach out to us via email, phone, or
                visit our office.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:info@dreamxdesign.pro"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@dreamxdesign.pro
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/916203186661?text=Hello!%20I%27d%20like%20to%20learn%20more%20about%20DreamxDesign%27s%20services.%20Can%20we%20chat%3F"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 620-318-6661
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    DigitalSherpa
                    <br />
                    Unit 806, Tower 2, Godrej Waterside, Plot DP5, Sector V,
                    Bidhannagar, Kolkata, West Bengal 700091
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-lg overflow-hidden h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7368.298636166876!2d88.43757!3d22.573518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027535ad832d67%3A0x1be584f99b3096b0!2sDigitalSherpa!5e0!3m2!1sen!2sin!4v1740419920749!5m2!1sen!2sin"
              width="800"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
