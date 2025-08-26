import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, ShoppingBag, TrendingUp, Users, Package, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "heartbeat",
      title: "heARTbeat",
      subtitle: "Art & Sensory Care Package Program for Hospitalized Patients",
      status: "Active",
      launched: "2023",
      category: "Patient Care Innovation",
      description: "Art and sensory therapy packages designed for hospitalized patients, particularly dementia patients and their families, providing personalized care support through standardized processes.",
      target: "Hospitalized patients (focus: dementia, long-term care, ICU patient families)",
      impact: {
        packages: "200+",
        departments: "5+",
        feedback: "98%",
        expansion: "3 hospitals"
      },
      components: [
        "Art creation materials (colored pencils, drawing paper, coloring books)",
        "Sensory stimulation items (aromatherapy, tactile materials)",
        "Cognitive support tools (simple puzzles, memory cards)",
        "Emotional support resources (meditation guides, music playlists)"
      ],
      process: [
        "Needs assessment: Collaborate with nursing teams to determine patient needs",
        "Material customization: Adjust package contents based on department specifics",
        "Distribution coordination: Establish distribution mechanisms with social work teams",
        "Impact tracking: Collect patient and family feedback data"
      ],
      collaborations: [
        "Neurology - Dementia patient specialty programs",
        "ICU - Family emotional support",
        "Geriatrics - Cognitive stimulation activities",
        "Social Work - Distribution coordination and impact assessment"
      ],
      evidence: "https://heartbeatorganization.weebly.com/",
      nextSteps: [
        "Expand to more hospital systems",
        "Develop digital tracking system",
        "Establish volunteer training programs",
        "Partner with insurance systems for cost coverage"
      ]
    },
    {
      id: "piggyco",
      title: "Piggy & Co Tote Bags",
      subtitle: "New Mother Care Package Initiative",
      status: "Expanding",
      launched: "2024",
      category: "Maternal Health Support",
      description: "Practical care packages designed and distributed for new mothers, focusing on immediate postpartum needs and emotional support.",
      target: "Obstetric inpatient new mothers (particularly first-time mothers, high-risk pregnancy recovery)",
      impact: {
        packages: "150+",
        departments: "3",
        feedback: "96%",
        partnerships: "2 clinics"
      },
      components: [
        "Postpartum care essentials (nursing pads, comfort items)",
        "Basic baby care tools (thermometer, care guides)",
        "Emotional support resources (postpartum depression information, support hotlines)",
        "Nutritional recovery supplements (healthy snacks, hydration reminders)"
      ],
      process: [
        "Design research: Survey urgent needs of new mothers",
        "Material procurement: Establish supplier relationships and cost control",
        "Distribution mechanism: Collaborate with obstetric nursing teams",
        "Impact assessment: 6-week postpartum follow-up surveys"
      ],
      collaborations: [
        "Obstetrics - Distribution during hospital stay",
        "Social Work Team - High-risk case identification",
        "Nutrition Department - Recovery period nutrition guidance",
        "Mental Health Services - Postpartum depression screening"
      ],
      evidence: "https://www.thepiggyco.com/",
      nextSteps: [
        "Connect with more obstetric clinics",
        "Develop prenatal version care packages",
        "Establish donor network",
        "Research long-term health outcome impacts"
      ]
    },
    {
      id: "money-mindset",
      title: "Makayla's Money Mindset",
      subtitle: "Financial Literacy & Psychology Cross-Disciplinary Science Communication",
      status: "Ongoing",
      launched: "2023",
      category: "Health Education & Advocacy",
      description: "Exploring intersections of financial literacy, mental health, and health equity through blog platform, providing practical financial and health decision-making guidance for adolescents.",
      target: "High school and college students (particularly focusing on financial health literacy for low-income background students)",
      impact: {
        readers: "1000+",
        articles: "25+",
        engagement: "85%",
        shares: "500+"
      },
      topics: [
        "Healthcare costs & insurance literacy",
        "College financing & health insurance",
        "Mental health economics for students",
        "Financial stress & academic performance"
      ],
      approach: [
        "Research-driven content: Citing peer-reviewed research",
        "Case analysis: Real-world scenario applications",
        "Action guides: Actionable decision-making frameworks",
        "Resource links: Reliable financial and health resources"
      ],
      collaborations: [
        "School Counseling Center - Student financial stress support",
        "Community financial education institutions - Content review",
        "Peer networks - Content feedback and sharing",
        "Professional mentors - Content accuracy verification"
      ],
      evidence: "https://makaylamoneymindset.weebly.com/blog",
      nextSteps: [
        "Develop specialized series for pre-medical students",
        "Collaborate with more educational institutions for promotion",
        "Create multimedia content (podcasts, videos)",
        "Establish peer financial health mutual support network"
      ]
    }
  ];

  return (
    <section id="projects" className="py-section px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Projects & Initiatives
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Self-initiated programs addressing real healthcare needs 
            with measurable community impact and sustainable implementation
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} id={project.id === 'heartbeat' ? 'projects-heartbeat' : project.id === 'piggyco' ? 'projects-piggyco' : 'research-independent'} className="evidence-card group hover:shadow-xl transition-all duration-300">
              <CardHeader className="border-b border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl heading-clinical group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge className={project.status === 'Active' ? 'bg-green-100 text-green-800 border-green-300' : 'bg-blue-100 text-blue-800 border-blue-300'}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg text-clinical">{project.subtitle}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Launched {project.launched}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="text-xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 pt-6">
                {/* Description & Target */}
                <div className="space-y-4">
                  <p className="text-clinical text-lg leading-relaxed">{project.description}</p>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <h4 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Target Population
                    </h4>
                    <p className="text-clinical text-sm">{project.target}</p>
                  </div>
                </div>

                {/* Components & Process */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold heading-clinical mb-4 flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" />
                      {project.id === 'money-mindset' ? 'Content Topics' : 'Package Components'}
                    </h4>
                    <ul className="space-y-2">
                      {(project.id === 'money-mindset' ? project.topics : project.components).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-clinical">
                          <CheckCircle className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold heading-clinical mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      {project.id === 'money-mindset' ? 'Content Approach' : 'Implementation Process'}
                    </h4>
                    <ul className="space-y-2">
                      {(project.id === 'money-mindset' ? project.approach : project.process).map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-clinical">
                          <span className="bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Collaborations */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-4 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    Key Collaborations
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.collaborations.map((collab, idx) => (
                      <div key={idx} className="bg-primary/5 rounded-lg p-3 text-sm text-clinical">
                        {collab}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-border/50 pt-6">
                  <h4 className="font-semibold heading-clinical mb-4">Future Development</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.nextSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-clinical">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <div className="text-xs citation-style">
                      Project Documentation & Evidence
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last updated: {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="evidence-link group">
                    <ExternalLink className="h-3 w-3 mr-2 group-hover:scale-110 transition-transform" />
                    View Project Site
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Impact Summary */}
        <div className="mt-16">
          <Card className="evidence-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-center heading-clinical">Collective Project Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">350+</div>
                  <div className="text-sm text-muted-foreground">Total Packages Distributed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Healthcare Partnerships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Individuals Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">97%</div>
                  <div className="text-sm text-muted-foreground">Positive Feedback Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Years Active</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;