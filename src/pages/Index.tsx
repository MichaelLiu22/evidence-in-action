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
        {/* Biography 板块 - 深蓝色 */}
        <section className="bg-gradient-to-b from-blue-600 to-blue-500 text-white relative animate-fade-in">
          <Hero />
          <About />
          {/* 动画波浪线分隔 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg className="w-full h-full animate-wave-flow" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
                    fill="hsl(var(--wave-blue))" 
                    opacity="0.8"/>
              <path d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z" 
                    fill="hsl(var(--wave-blue))" 
                    opacity="0.6"
                    className="animate-wave-flow" 
                    style={{ animationDelay: '1s' }}/>
            </svg>
          </div>
        </section>
        
        {/* Research 板块 - 浅蓝色 */}
        <section className="bg-gradient-to-b from-blue-200 to-blue-300 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Research />
          <ClinicalService />
          {/* 动画波浪线分隔 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg className="w-full h-full animate-wave-flow" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,40 C400,100 800,20 1200,80 L1200,120 L0,120 Z" 
                    fill="hsl(var(--wave-green))" 
                    opacity="0.7"/>
              <path d="M0,60 C350,10 850,110 1200,50 L1200,120 L0,120 Z" 
                    fill="hsl(var(--wave-green))" 
                    opacity="0.5"
                    className="animate-wave-flow" 
                    style={{ animationDelay: '1.5s' }}/>
            </svg>
          </div>
        </section>
        
        {/* Teaching 板块 - 更浅的蓝色 */}
        <section className="bg-gradient-to-b from-blue-100 to-blue-200 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Projects />
          <Leadership />
          {/* 动画波浪线分隔 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg className="w-full h-full animate-wave-flow" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,80 C300,20 900,100 1200,40 L1200,120 L0,120 Z" 
                    fill="hsl(var(--wave-purple))" 
                    opacity="0.6"/>
              <path d="M0,50 C450,110 750,10 1200,70 L1200,120 L0,120 Z" 
                    fill="hsl(var(--wave-purple))" 
                    opacity="0.4"
                    className="animate-wave-flow" 
                    style={{ animationDelay: '2s' }}/>
            </svg>
          </div>
        </section>
        
        {/* Contact 板块 - 最浅的蓝色 */}
        <section className="bg-gradient-to-b from-blue-50 to-blue-100 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
