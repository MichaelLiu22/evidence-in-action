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
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Home 板块 - 浅蓝色 */}
        <section className="bg-gradient-to-b from-blue-50 to-blue-100 relative">
          <Hero />
          <About />
          {/* 板块分隔线 */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-green-200"></div>
        </section>
        
        {/* Research 板块 - 浅绿色 */}
        <section className="bg-gradient-to-b from-green-50 to-green-100 relative">
          <Research />
          <ClinicalService />
          {/* 板块分隔线 */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-300 to-purple-200"></div>
        </section>
        
        {/* Teaching 板块 - 浅紫色 */}
        <section className="bg-gradient-to-b from-purple-50 to-purple-100 relative">
          <Projects />
          <Leadership />
          {/* 板块分隔线 */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-orange-200"></div>
        </section>
        
        {/* Notes 板块 - 浅橙色 */}
        <section className="bg-gradient-to-b from-orange-50 to-orange-100">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
