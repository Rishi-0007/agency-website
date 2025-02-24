import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/loader"; // Import the Loader component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Design Agency",
  description: "Transform your digital presence with our expert services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Wrap the entire application with the Loader */}
          <Loader>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </Loader>
        </ThemeProvider>
      </body>
    </html>
  );
}
