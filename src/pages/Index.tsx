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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ClinicalService />
        <Research />
        <Projects />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
