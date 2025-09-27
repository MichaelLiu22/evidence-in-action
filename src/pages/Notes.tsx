import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calendar, Tag } from "lucide-react";

const Notes = () => {
  const writingCategories = [
    {
      title: "Research Notes & Methodology",
      description: "Documentation from ongoing research projects and methodological training",
      entries: [
        {
          title: "Clinical Research Methods: Study Design and Data Analysis",
          date: "2025",
          status: "Ongoing",
          description: "Comprehensive notes from clinical research internship covering experimental design, statistical analysis, and ethical considerations",
          topics: ["Study Design", "Statistical Methods", "Research Ethics", "Data Analysis"],
          type: "Research Documentation",
          availability: "Private - research in progress"
        },
        {
          title: "Maternal Health Research: Literature Review and Methodology",
          date: "2024-2025",
          status: "Active",
          description: "Systematic documentation of literature review process and research methodology for independent maternal health study",
          topics: ["Maternal Health", "Health Disparities", "Literature Review", "Epidemiological Methods"],
          type: "Research Notes",
          availability: "Available upon completion"
        },
        {
          title: "Evidence-Based Practice Framework",
          date: "2024",
          status: "Complete",
          description: "Personal framework for evaluating and implementing evidence-based interventions in healthcare settings",
          topics: ["Evidence-Based Practice", "Healthcare Quality", "Intervention Design"],
          type: "Methodology Notes",
          availability: "Available for review"
        }
      ]
    },
    {
      title: "Health Policy & Advocacy Writing",
      description: "Analysis of healthcare policies and advocacy strategies",
      entries: [
        {
          title: "Maternal Health Policy Analysis: State-Level Interventions",
          date: "2025",
          status: "Draft",
          description: "Comparative analysis of state-level maternal health policies and their effectiveness in reducing mortality rates",
          topics: ["Health Policy", "Maternal Health", "Policy Analysis", "State Interventions"],
          type: "Policy Brief",
          availability: "Draft - review in progress"
        },
        {
          title: "Healthcare Access and Insurance Literacy",
          date: "2024",
          status: "Published",
          description: "Analysis of healthcare access barriers and the role of insurance literacy in health outcomes",
          topics: ["Healthcare Access", "Insurance Literacy", "Health Economics"],
          type: "Blog Series",
          availability: "Published",
          url: "https://makaylamoneymindset.weebly.com/blog"
        }
      ]
    },
    {
      title: "Educational Content & Science Communication",
      description: "Materials designed to communicate health and financial literacy concepts to diverse audiences",
      entries: [
        {
          title: "Financial Health Literacy for Students",
          date: "2023-Present",
          status: "Active",
          description: "Ongoing series exploring the intersection of financial literacy and health decision-making for young adults",
          topics: ["Financial Literacy", "Health Economics", "Student Resources", "Decision Making"],
          type: "Educational Blog",
          availability: "Public",
          url: "https://makaylamoneymindset.weebly.com/blog"
        },
        {
          title: "Health Advocacy Workshop Materials",
          date: "2024-2025",
          status: "Active",
          description: "Curriculum and materials for student workshops on health equity and evidence-based advocacy",
          topics: ["Health Advocacy", "Health Equity", "Workshop Materials", "Student Education"],
          type: "Educational Materials",
          availability: "Available for educators"
        },
        {
          title: "Clinical Volunteer Training Resources",
          date: "2023-Present",
          status: "Ongoing",
          description: "Training materials and protocols for hospital volunteer programs focused on patient care",
          topics: ["Volunteer Training", "Patient Care", "Hospital Protocols", "Training Materials"],
          type: "Training Documentation",
          availability: "Internal use"
        }
      ]
    },
    {
      title: "Personal Learning & Reflection",
      description: "Reflective writing and learning documentation from various experiences",
      entries: [
        {
          title: "Clinical Experience Reflections",
          date: "2022-Present",
          status: "Ongoing",
          description: "Reflective journals documenting experiences and learning from clinical volunteering at Huntington Hospital",
          topics: ["Clinical Experience", "Patient Care", "Professional Development", "Reflection"],
          type: "Personal Reflection",
          availability: "Private"
        },
        {
          title: "Research Experience Documentation",
          date: "2024-Present",
          status: "Active",
          description: "Documentation of research experiences, methodological learning, and professional development",
          topics: ["Research Experience", "Methodology", "Professional Development"],
          type: "Learning Portfolio",
          availability: "Available for academic review"
        }
      ]
    }
  ];

  return (
    <section className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Notes & Writing</h1>
          <p className="text-lg text-muted-foreground">
            Collection of research notes, policy analysis, educational content, and reflective writing 
            from my work in health research and advocacy
          </p>
        </section>

        {/* Writing Categories */}
        {writingCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="space-y-6">
              {category.entries.map((entry, entryIndex) => (
                <Card key={entryIndex} className="border border-border">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {entry.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {entry.date}
                            </div>
                            <Badge 
                              variant={
                                entry.status === 'Active' || entry.status === 'Ongoing' ? 'default' :
                                entry.status === 'Published' || entry.status === 'Complete' ? 'secondary' :
                                'outline'
                              }
                              className="text-xs"
                            >
                              {entry.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {entry.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground">{entry.description}</p>

                      {/* Topics */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">Topics</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {entry.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Availability: </span>
                          {entry.availability}
                        </div>
                        
                        {entry.url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={entry.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Writing Statistics */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Writing Overview</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Research Documents</div>
              </CardContent>
            </Card>
            
            <Card className="border border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Blog Articles</div>
              </CardContent>
            </Card>
            
            <Card className="border border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">Policy Analyses</div>
              </CardContent>
            </Card>
            
            <Card className="border border-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Readers Reached</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Note on Access */}
        <section>
          <Card className="border border-muted bg-muted/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Access to Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    Many research notes and draft materials are available for academic review upon request. 
                    Published content is freely accessible through provided links. For access to unpublished 
                    research materials or educational resources, please contact me directly.
                  </p>
                  <div className="mt-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:makayla.wang@example.com">
                        Request Access
                      </a>
                    </Button>
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

export default Notes;
