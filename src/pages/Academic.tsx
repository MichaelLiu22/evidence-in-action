import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Mail, Download, MapPin, Calendar, Award, Users, BookOpen, X } from "lucide-react";

const Academic = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isSlideshowVisible, setIsSlideshowVisible] = useState(false);
  const slideshowRef = useRef<HTMLDivElement>(null);

  // 检测幻灯片是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSlideshowVisible(true);
          } else {
            setIsSlideshowVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // 当30%可见时触发
      }
    );

    if (slideshowRef.current) {
      observer.observe(slideshowRef.current);
    }

    return () => {
      if (slideshowRef.current) {
        observer.unobserve(slideshowRef.current);
      }
    };
  }, []);

  const openResume = () => {
    if (typeof window !== "undefined") window.open("/Makayla_Resume.pdf", "_blank");
  };

  const papers = [
    {
      title:
        "Maternal Mortality Disparities in the United States: A Systematic Analysis of Racial and Socioeconomic Factors",
      authors: "Makayla Wang, Elizabeth Maglio",
      year: "2025",
      status: "In Progress",
      type: "Independent Research",
      description:
        "Comprehensive analysis of maternal mortality rates and health disparities across demographic groups in the US",
      links: [
        { type: "Research Proposal", url: "#", available: false },
        { type: "Methodology", url: "#research", available: true },
      ],
      impact: {
        metric: "2025",
        description: "Target completion",
        details: "Submit manuscript for academic review",
      },
      tags: ["Maternal Health", "Health Equity", "Epidemiology"],
    },
  ];

  const teaching = [
    {
      title: "Health Advocacy Workshop Series",
      role: "Student Leader",
      period: "2024 - 2025",
      institution: "Westridge School",
      description:
        "Student-led workshops on health equity and evidence-based advocacy for high school students",
      materials: [
        { type: "Workshop Materials", url: "#", available: false },
        { type: "Student Resources", url: "#", available: false },
      ],
      impact: { metric: "45+", description: "Students engaged", details: "Multi-session series" },
      tags: ["Advocacy", "Health Equity", "Workshop"],
    },
    {
      title: "Financial Literacy for Health Decisions",
      role: "Content Creator",
      period: "2023 - Present",
      institution: "Online Platform",
      description:
        "Educational blog content on financial literacy and healthcare decision-making for students",
      materials: [
        {
          type: "Blog Posts",
          url: "https://makaylamoneymindset.weebly.com/blog",
          available: true,
        },
        { type: "Resource Guides", url: "#", available: false },
      ],
      impact: { metric: "1,000+", description: "Readers reached", details: "Articles & guides" },
      tags: ["Financial Literacy", "Public Health", "Education"],
    },
  ];

  const notes = [
    {
      title: "Clinical Research Methods",
      category: "Research Notes",
      description: "Notes and methodology cards from clinical research training",
      topics: ["Study Design", "Data Analysis", "Ethics in Research", "Statistical Methods"],
      status: "Ongoing",
      url: "#",
    },
    {
      title: "Healthcare Policy Analysis",
      category: "Policy Writing",
      description: "Analysis of maternal health policies and intervention strategies",
      topics: ["Health Equity", "Policy Impact", "Evidence-Based Interventions"],
      status: "2025",
      url: "#",
    },
    {
      title: "Financial Health Literacy",
      category: "Educational Content",
      description:
        "Cross-disciplinary exploration of financial literacy and health outcomes",
      topics: ["Healthcare Economics", "Student Financial Health", "Insurance Literacy"],
      status: "Active",
      url: "https://makaylamoneymindset.weebly.com/blog",
    },
  ];

  return (
    <section data-glass="academic" className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Section Header / Bio */}
        <div className="mb-12">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8">
            <div className="w-32 h-40 md:w-48 md:h-60 rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <img
                src="/lovable-uploads/Makayla.png"
                alt="Makayla Wang"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold heading-clinical text-center md:text-left">Makayla Wang</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Sociology / Public Health / Social Justice Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Westridge School, Pasadena, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Class of 2026</span>
                </div>
              </div>

              <p className="text-clinical max-w-3xl">
              Hi! I’m Makayla Wang, a senior at Westridge School with a deep passion for sociology, health equity, and social justice. I’m driven by a desire to understand how social systems shape people’s lives—and how we can create change through research, advocacy, and community engagement.
Outside the classroom, I’ve explored my interests through leadership conferences, community service, and volunteer work, all centered on uplifting others and amplifying diverse voices. I also express my creativity as a blogger and small business owner, where I share ideas about finance, wellness, and empowerment.
When I’m not working on new projects, you can find me at an amusement park with friends, trying new restaurants and cafés, or in the kitchen baking for my family. I love finding joy in little adventures and meaningful connections.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Maternal Health Research</Badge>
                <Badge variant="secondary">Health Equity</Badge>
                <Badge variant="secondary">Clinical Volunteering</Badge>
                <Badge variant="secondary">Evidence-Based Practice</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                <Button variant="outline" size="sm" onClick={openResume} className="w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-1" /> CV
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <a href="mailto:makayla.wang@example.com">
                    <Mail className="h-4 w-4 mr-1" /> Email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider underline to match Research section style */}
          <div className="w-500 h-1 bg-primary rounded-full mt-8"></div>
        </div>

        {/* Life Photos Gallery - Compact Display */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold heading-clinical">My Life! ☀</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <div
                key={num}
                onClick={() => setSelectedImage(num)}
                className="photo-reveal-container relative overflow-hidden rounded-lg aspect-square cursor-pointer border border-white/20 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <img
                  src={`/lovable-uploads/life-photo${num}.jpg`}
                  alt={`Life photo ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slideshow Section */}
        <div ref={slideshowRef} className="mt-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold heading-clinical mb-2">My Presentation</h2>
            <p className="text-clinical">Interactive slideshow showcasing my work and ideas</p>
          </div>
          
          <Card className="evidence-card border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <CardContent className="p-4 md:p-6">
              {/* Auto-playing Slideshow Carousel - Only plays when visible */}
              <Carousel
                key={isSlideshowVisible ? "autoplay" : "manual"}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={
                  isSlideshowVisible
                    ? [
                        Autoplay({
                          delay: 5000, // 5 seconds - starts counting when visible
                          stopOnInteraction: false,
                          stopOnMouseEnter: true,
                        }),
                      ]
                    : []
                }
              >
                <CarouselContent>
                  {/* Presentation slides - auto-playing every 5 seconds */}
                  {[
                    "/presentation/ppt1.png",
                    "/presentation/ppt2.png",
                    "/presentation/ppt3.png",
                    "/presentation/ppt4.png",
                    "/presentation/ppt5.png",
                    "/presentation/ppt6.png",
                    "/presentation/ppt7.png",
                    "/presentation/ppt8.png",
                    "/presentation/ppt9.png",
                    "/presentation/ppt10.png",
                    "/presentation/ppt11.png",
                    "/presentation/ppt12.png",
                    "/presentation/ppt13.png",
                    "/presentation/ppt14.png",
                  ].map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
                        <img
                          src={slide}
                          alt={`Slide ${index + 1}`}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="flex items-center justify-center text-muted-foreground">
                                  <p>Slide ${index + 1} - Please add image to /public/presentation/</p>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30" />
                <CarouselNext className="right-2 bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30" />
              </Carousel>
            </CardContent>
          </Card>
        </div>

        {/* Image Viewer Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-transparent border-none shadow-none [&>button]:hidden">
            {selectedImage && (
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-50 rounded-full bg-white/20 backdrop-blur-md border border-white/30 p-2 hover:bg-white/30 transition-all duration-200 shadow-lg"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
                <img
                  src={`/lovable-uploads/life-photo${selectedImage}.jpg`}
                  alt={`Life photo ${selectedImage}`}
                  className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Academic;
