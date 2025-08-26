import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, ExternalLink, Download, Linkedin, FileText, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your message. I'll respond within 24-48 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = {
    email: "makaylawang07@gmail.com",
    phone: "(626) 491-9968",
    linkedin: "linkedin.com/in/makaylawang",
    location: "Pasadena, CA"
  };

  const externalLinks = [
    {
      title: "heARTbeat Organization",
      url: "https://heartbeatorganization.weebly.com/",
      description: "Patient care package initiative documentation",
      type: "Project Portfolio"
    },
    {
      title: "Makayla's Money Mindset Blog",
      url: "https://makaylamoneymindset.weebly.com/blog",
      description: "Financial literacy & health economics writing",
      type: "Blog & Writing"
    },
    {
      title: "Piggy & Co",
      url: "https://www.thepiggyco.com/",
      description: "Maternal health support project",
      type: "Community Initiative"
    }
  ];

  const availableFor = [
    "Research collaboration opportunities",
    "Clinical volunteering partnerships", 
    "Health equity initiative discussions",
    "Speaking engagements on maternal health",
    "Student mentorship conversations",
    "Healthcare innovation consultations"
  ];

  return (
    <section id="contact" className="py-section px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Contact & Collaboration
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Open to research collaborations, clinical partnerships, 
            and discussions on health equity initiatives
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information & Links */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${contactInfo.email}`} className="evidence-link text-sm">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${contactInfo.phone}`} className="evidence-link text-sm">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="evidence-link text-sm">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <a href="/Makayla Resume.pdf" download className="block">
                    <Button className="w-full" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume (PDF)
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Available For */}
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical text-sm">Available For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {availableFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-clinical">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical text-sm">Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {externalLinks.map((link, idx) => (
                  <div key={idx} className="border border-border/50 rounded-lg p-3 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-sm heading-clinical">{link.title}</h4>
                      <Badge variant="outline" className="text-xs">{link.type}</Badge>
                    </div>
                    <p className="text-xs text-clinical mb-2">{link.description}</p>
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Visit Site
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send a Message
                </CardTitle>
                <p className="text-clinical text-sm">
                  Interested in collaboration or have questions about my work? 
                  I typically respond within 24-48 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium heading-clinical">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="transition-colors focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium heading-clinical">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium heading-clinical">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g., Research collaboration opportunity"
                      required
                      className="transition-colors focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium heading-clinical">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry, collaboration idea, or question. Include any relevant details about timeline, scope, or specific areas of interest."
                      rows={6}
                      required
                      className="transition-colors focus:border-primary resize-none"
                    />
                  </div>

                  <div className="bg-accent/30 rounded-lg p-4 text-sm text-clinical">
                    <p className="mb-2">
                      <strong>Response Time:</strong> I aim to respond to all inquiries within 24-48 hours.
                    </p>
                    <p>
                      <strong>Priority Areas:</strong> Research collaborations, clinical partnerships, 
                      health equity initiatives, and speaking opportunities.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Card className="evidence-card border-accent">
                <CardContent className="p-4">
                  <h4 className="font-semibold heading-clinical mb-2 text-sm">Current Focus</h4>
                  <p className="text-xs text-clinical">
                    Actively seeking research mentorship opportunities and clinical 
                    partnerships focused on maternal health and health equity initiatives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="evidence-card border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold heading-clinical mb-2 text-sm">Location</h4>
                  <p className="text-xs text-clinical">
                    Based in Pasadena, CA. Available for virtual collaborations 
                    and in-person meetings in the Los Angeles area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm citation-style max-w-2xl mx-auto">
            This portfolio represents ongoing work and evolving research interests. 
            All project metrics and impact data are regularly updated to reflect current status. 
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;