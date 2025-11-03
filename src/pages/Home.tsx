import { Card } from "@/components/ui/card";

const Home = () => {
  // 照片数据 - 稍后用户会上传实际照片
  const photos = [
    { id: 1, src: "/lovable-uploads/photo1.jpg", alt: "Life moment 1" },
    { id: 2, src: "/lovable-uploads/photo2.jpg", alt: "Life moment 2" },
    { id: 3, src: "/lovable-uploads/photo3.jpg", alt: "Life moment 3" },
    { id: 4, src: "/lovable-uploads/photo4.jpg", alt: "Life moment 4" },
    { id: 5, src: "/lovable-uploads/photo5.jpg", alt: "Life moment 5" },
    { id: 6, src: "/lovable-uploads/photo6.jpg", alt: "Life moment 6" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-20 px-6">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(/lovable-uploads/Makayla.png)` }}
      />
      <div className="absolute inset-0 medical-grid-bg" />
      <div className="absolute inset-0 ecg-wave" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Introduction Card with Glass Effect */}
        <Card className="glass-card p-8 md:p-12 mb-16 animate-fade-in-up border-primary/20">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold heading-clinical mb-6 leading-tight">
              Makayla Wang
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl text-muted-foreground">
              <p className="leading-relaxed">
                Hello! I'm Makayla Wang, a passionate high school student dedicated to healthcare innovation, 
                maternal health research, and community service. I believe in the power of compassion, 
                evidence-based practice, and creative problem-solving to make a meaningful impact.
              </p>
              <p className="leading-relaxed">
                Through clinical volunteering at Huntington Hospital, independent research on maternal mortality, 
                and various leadership initiatives, I'm committed to advancing health equity and improving 
                healthcare access for underserved communities.
              </p>
            </div>
          </div>
        </Card>

        {/* Photo Gallery Section */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center heading-clinical">
            Life Moments
          </h2>
          
          {/* 6-Photo Grid Layout with Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="glass-card group overflow-hidden rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-muted/20">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
