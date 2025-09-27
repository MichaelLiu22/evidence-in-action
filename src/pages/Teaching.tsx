import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, BookOpen, Calendar, MapPin } from "lucide-react";

const Teaching = () => {
  const teachingExperience = [
    {
      title: "Health Advocacy Workshop Series",
      role: "Student Leader & Curriculum Developer",
      period: "2024-2025",
      institution: "Westridge School",
      location: "Pasadena, CA",
      description: "Designed and facilitated student-led workshops on health equity, evidence-based advocacy, and healthcare access for high school students.",
      topics: [
        "Understanding Health Disparities",
        "Evidence-Based Advocacy Methods",
        "Healthcare Policy Analysis",
        "Community Health Assessment"
      ],
      participants: "45+ students",
      format: "Interactive workshops, case studies, group discussions",
      materials: [
        { type: "Workshop Slides", available: false },
        { type: "Student Handouts", available: false },
        { type: "Case Study Materials", available: false }
      ]
    },
    {
      title: "Financial Literacy for Health Decisions",
      role: "Content Creator & Educator",
      period: "2023-Present",
      institution: "Online Platform",
      location: "Digital",
      description: "Created educational content exploring the intersection of financial literacy and healthcare decision-making for students.",
      topics: [
        "Healthcare Costs & Insurance Literacy",
        "College Financing & Health Insurance",
        "Mental Health Economics",
        "Financial Stress & Academic Performance"
      ],
      participants: "1000+ readers",
      format: "Blog posts, resource guides, case analyses",
      materials: [
        { type: "Blog Articles", available: true, url: "https://makaylamoneymindset.weebly.com/blog" },
        { type: "Resource Guides", available: false },
        { type: "Financial Planning Tools", available: false }
      ]
    },
    {
      title: "heARTbeat Program Training",
      role: "Peer Educator",
      period: "2023-Present",
      institution: "Huntington Hospital",
      location: "Pasadena, CA",
      description: "Train new volunteers in patient care package assembly and distribution protocols for hospitalized patients.",
      topics: [
        "Patient-Centered Care Principles",
        "Cultural Sensitivity in Healthcare",
        "Volunteer Safety Protocols",
        "Documentation and Impact Tracking"
      ],
      participants: "20+ volunteers",
      format: "Hands-on training, mentorship, ongoing support",
      materials: [
        { type: "Training Manual", available: false },
        { type: "Safety Protocols", available: false },
        { type: "Impact Assessment Tools", available: false }
      ]
    }
  ];

  const futurePlans = [
    {
      title: "Pre-Medical Student Health Equity Series",
      timeline: "2025-2026",
      description: "Developing workshop series for pre-medical students on addressing health disparities in clinical practice",
      status: "Planning"
    },
    {
      title: "Community Health Education Partnership",
      timeline: "2025",
      description: "Collaborating with local community centers to provide health literacy workshops for underserved populations",
      status: "In Development"
    }
  ];

  return (
    <section className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Teaching & Instruction</h1>
          <p className="text-lg text-muted-foreground">
            Educational initiatives focused on health advocacy, financial literacy, and evidence-based practice
          </p>
        </section>

        {/* Current Teaching Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Current & Recent Experience</h2>
          
          <div className="space-y-8">
            {teachingExperience.map((course, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline">{course.role}</Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {course.period}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {course.institution}, {course.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {course.participants}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground">{course.description}</p>

                    {/* Format */}
                    <div className="bg-muted/50 rounded-lg p-3">
                      <span className="text-sm font-medium text-foreground">Format: </span>
                      <span className="text-sm text-muted-foreground">{course.format}</span>
                    </div>

                    {/* Topics Covered */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Topics Covered
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {course.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-foreground">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Materials */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Course Materials</h4>
                      <div className="flex gap-2 flex-wrap">
                        {course.materials.map((material, idx) => (
                          <Button 
                            key={idx} 
                            variant="outline" 
                            size="sm" 
                            disabled={!material.available}
                            asChild={material.available}
                          >
                            {material.available ? (
                              <a href={material.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                {material.type}
                              </a>
                            ) : (
                              <>
                                {material.type} (Available upon request)
                              </>
                            )}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Teaching Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Future Teaching Initiatives</h2>
          
          <div className="space-y-4">
            {futurePlans.map((plan, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {plan.title}
                      </h3>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {plan.status}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      Timeline: {plan.timeline}
                    </div>
                    
                    <p className="text-sm text-foreground">
                      {plan.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Teaching Philosophy</h2>
          
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-foreground mb-4">
                  My approach to education emphasizes evidence-based learning and practical application. 
                  I believe in creating inclusive learning environments where students can connect 
                  theoretical knowledge to real-world health challenges.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Evidence-Based</h4>
                    <p className="text-sm text-muted-foreground">
                      All content is grounded in peer-reviewed research and current best practices
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Interactive</h4>
                    <p className="text-sm text-muted-foreground">
                      Case studies, group discussions, and hands-on activities engage learners
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Applied</h4>
                    <p className="text-sm text-muted-foreground">
                      Students develop practical skills they can use in their communities
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
};

export default Teaching;
