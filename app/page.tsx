import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { Architecture } from "@/components/sections/Architecture";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Download } from "@/components/sections/Download";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Architecture />
        <DashboardPreview />
        <Download />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
