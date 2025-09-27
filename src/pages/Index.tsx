import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClinicalService from "@/components/ClinicalService";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-transparent">
      <Navigation />
      <main className="relative z-10 flex flex-col gap-section pt-24 pb-24">
        <Hero />
        <About />
        <Research />
        <ClinicalService />
        <Projects />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
