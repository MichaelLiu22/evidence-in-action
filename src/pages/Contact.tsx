import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, ExternalLink, Download, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { openResume } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const createMailtoLink = (data: typeof formData) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`Hi Makayla,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`);
    return `mailto:Michaelxliu22@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleResumeDownload = () => {
    // Open Google Drive resume folder
    openResume();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const mailtoLink = createMailtoLink(formData);
      
      toast({
        title: "Message Prepared Successfully!",
        description: "Your message has been prepared. Your email client will open automatically.",
      });
      
      setTimeout(() => {
        window.open(mailtoLink, '_blank');
      }, 1000);
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Failed to prepare message:', error);
      toast({
        title: "Failed to Prepare Message",
        description: "There was an error preparing your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = {
    email: "Michaelxliu22@gmail.com",
    phone: "(626) 491-9968",
    linkedin: "linkedin.com/in/makaylawang",
    location: "Pasadena, CA"
  };

  return (
    <section data-glass="contact" className="py-section px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Contact & Collaboration
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Send me a message directly through your email client. Fill out the form below and your message will be automatically prepared and ready to send.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information & Links */}
          <div className="lg:col-span-1 space-y-6">
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
                    <span className="text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{contactInfo.location}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="bg-primary/5 rounded-lg p-3 text-sm">
                    <p className="font-medium text-primary mb-1">💡 Anonymous Messaging</p>
                    <p className="text-clinical text-xs">
                      Use the form to send messages anonymously. Your email client will open with a pre-filled message ready to send.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available For */}
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical">Available For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Research Collaborations",
                    "Clinical Partnerships", 
                    "Health Equity Initiatives",
                    "Speaking Opportunities",
                    "Mentorship Programs",
                    "Community Outreach"
                  ].map((item) => (
                    <Badge key={item} variant="outline" className="mr-2 mb-2">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical">Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" onClick={handleResumeDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  View Resume
                </Button>
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
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project, collaboration idea, or question..."
                      rows={6}
                    />
                  </div>

                  <div className="bg-accent/30 rounded-lg p-4 text-sm text-clinical">
                    <p className="mb-2">
                      <strong>How it works:</strong> Fill out this form and your message will be automatically prepared in your email client. You can then send it directly to me.
                    </p>
                    <p className="mb-2">
                      <strong>Response Time:</strong> I aim to respond to all inquiries within 24-48 hours.
                    </p>
                    <p>
                      <strong>Priority Areas:</strong> Research collaborations, clinical partnerships, 
                      health equity initiatives, and speaking opportunities.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Preparing...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Prepare & Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
