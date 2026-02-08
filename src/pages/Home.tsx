import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Navbar } from "../components/Navbar";
import { Courses } from "../components/Courses";
import { About } from "../components/About";
import { ContactCTA } from "../components/ContactCTA";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Courses />
      <About />
      <Contact />
      <ContactCTA />
      <Footer />
    </>
  );
}
