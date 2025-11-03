import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-transparent">
      <Navigation />
      <main className="relative z-10 pt-24 pb-24">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
