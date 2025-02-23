import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkSection } from "@/components/Work";
import { Clients } from "@/components/Clients";
import ContactPage from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WorkSection />
      <Clients />
      <About />
      <ContactPage />
    </div>
  );
}
