import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Download, MapPin, Calendar, Award } from "lucide-react";

const Academic = () => {
  const openResume = () => {
    window.open("/Makayla_Resume.pdf", "_blank");
  };

  const papers = [
    {
      title: "Maternal Mortality Disparities in the United States: A Systematic Analysis of Racial and Socioeconomic Factors",
      authors: "Makayla Wang, Elizabeth Maglio",
      year: "2025",
      status: "In Progress",
      type: "Independent Research",
      description: "Comprehensive analysis of maternal mortality rates and health disparities across demographic groups in the US",
      links: [
        { type: "Research Proposal", url: "#", available: false },
        { type: "Methodology", url: "#research", available: true }
      ]
    }
  ];

  const teaching = [
    {
      title: "Health Advocacy Workshop Series",
      role: "Student Leader",
      period: "2024-2025",
      institution: "Westridge School",
      description: "Student-led workshops on health equity and evidence-based advocacy for high school students",
      materials: [
        { type: "Workshop Materials", url: "#", available: false },
        { type: "Student Resources", url: "#", available: false }
      ]
    },
    {
      title: "Financial Literacy for Health Decisions",
      role: "Content Creator",
      period: "2023-Present",
      institution: "Online Platform",
      description: "Educational blog content on financial literacy and healthcare decision-making for students",
      materials: [
        { type: "Blog Posts", url: "https://makaylamoneymindset.weebly.com/blog", available: true },
        { type: "Resource Guides", url: "#", available: false }
      ]
    }
  ];

  const notes = [
    {
      title: "Clinical Research Methods",
      category: "Research Notes",
      description: "Notes and methodology cards from clinical research training",
      topics: ["Study Design", "Data Analysis", "Ethics in Research", "Statistical Methods"],
      status: "Ongoing",
      url: "#"
    },
    {
      title: "Healthcare Policy Analysis",
      category: "Policy Writing",
      description: "Analysis of maternal health policies and intervention strategies",
      topics: ["Health Equity", "Policy Impact", "Evidence-Based Interventions"],
      status: "2025",
      url: "#"
    },
    {
      title: "Financial Health Literacy",
      category: "Educational Content",
      description: "Cross-disciplinary exploration of financial literacy and health outcomes",
      topics: ["Healthcare Economics", "Student Financial Health", "Insurance Literacy"],
      status: "Active",
      url: "https://makaylamoneymindset.weebly.com/blog"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header - Biography */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-48 h-60 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <img 
                src="/lovable-uploads/Makayla.png" 
                alt="Makayla Wang"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Makayla Wang</h1>
              
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Student Researcher, Pre-Medical Track</span>
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

              <div className="prose prose-sm max-w-none">
                <p className="text-foreground">
                  I am a high school student conducting independent research on maternal health disparities 
                  with a focus on evidence-based healthcare interventions. My work combines clinical volunteer 
                  experience at Huntington Hospital with systematic research on health equity issues. 
                  I am particularly interested in the intersection of policy, community health, and 
                  evidence-based practice in addressing healthcare disparities.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Maternal Health Research</Badge>
                <Badge variant="secondary">Health Equity</Badge>
                <Badge variant="secondary">Clinical Volunteering</Badge>
                <Badge variant="secondary">Evidence-Based Practice</Badge>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" onClick={openResume}>
                  <Download className="h-4 w-4 mr-1" />
                  CV
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:makayla.wang@example.com">
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Research</h2>
          
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {paper.title}
                      </h3>
                      <Badge variant={paper.status === 'In Progress' ? 'secondary' : 'default'} className="flex-shrink-0">
                        {paper.status}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {paper.authors} ({paper.year})
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {paper.type}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-foreground">
                      {paper.description}
                    </p>
                    
                    <div className="flex gap-2 flex-wrap">
                      {paper.links.map((link, idx) => (
                        <Button 
                          key={idx} 
                          variant="outline" 
                          size="sm" 
                          disabled={!link.available}
                          asChild={link.available}
                        >
                          {link.available ? (
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              {link.type}
                            </a>
                          ) : (
                            <>
                              {link.type} (Coming Soon)
                            </>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Teaching & Instruction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Teaching & Instruction</h2>
          
          <div className="space-y-6">
            {teaching.map((course, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {course.title}
                      </h3>
                      <div className="text-sm text-muted-foreground flex-shrink-0">
                        {course.period}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Badge variant="outline">{course.role}</Badge>
                      <Badge variant="secondary" className="text-xs">{course.institution}</Badge>
                    </div>
                    
                    <p className="text-sm text-foreground">
                      {course.description}
                    </p>
                    
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
                              {material.type} (Private)
                            </>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Notes & Writing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Notes & Writing</h2>
          
          <div className="space-y-6">
            {notes.map((note, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {note.title}
                      </h3>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {note.status}
                      </Badge>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      {note.category}
                    </Badge>
                    
                    <p className="text-sm text-foreground">
                      {note.description}
                    </p>
                    
                    <div className="flex gap-1 flex-wrap">
                      {note.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    {note.url !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={note.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Content
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground border-t pt-8">
          <p>© {new Date().getFullYear()} Makayla Wang. All rights reserved.</p>
          <p className="mt-2">
            Contact: <a href="mailto:makayla.wang@example.com" className="text-primary hover:underline">makayla.wang@example.com</a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Academic;