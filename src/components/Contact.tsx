import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, ExternalLink, Download, Linkedin, FileText, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { createMailtoLink } from '@/config/email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const handleResumeDownload = () => {
    setShowDownloadOptions(true);
  };

  const downloadDirect = () => {
    setShowDownloadOptions(false);
    
    // Direct download attempt
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Makayla_Resume.pdf';
    downloadLink.download = 'Makayla_Resume.pdf';
    downloadLink.style.display = 'none';
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const openInNewWindow = () => {
    setShowDownloadOptions(false);
    window.open('/Makayla_Resume.pdf', '_blank');
  };

  const requestViaEmail = () => {
    setShowDownloadOptions(false);
    
    const emailBody = `Hi Makayla,

I would like to request a copy of your resume.

Best regards,
[Your Name]`;
    
    const mailtoLink = `mailto:michaelxliu22@gmail.com?subject=Resume Request&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // 使用 mailto 链接直接发送邮件
      const mailtoLink = createMailtoLink(formData);
      
      // 显示成功消息
      toast({
        title: "Message Prepared Successfully!",
        description: "Your message has been prepared. Your email client will open automatically.",
      });
      
      // 延迟一下再打开邮件客户端，让用户看到成功消息
      setTimeout(() => {
        window.open(mailtoLink, '_blank');
      }, 1000);
      
      // Reset form
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
    email: "Michaelxliu22@gmail.com", // 您的测试邮箱
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
            Send me a message directly through your email client. Fill out the form below and your message will be automatically prepared and ready to send.
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

      {/* Download Options Modal */}
      {showDownloadOptions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4 shadow-xl border border-border">
            <h3 className="text-xl font-semibold mb-4 text-center">Choose Download Method</h3>
            <p className="text-muted-foreground text-center mb-6">
              Please select your preferred way to access the resume
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={downloadDirect} 
                className="w-full justify-start"
                size="lg"
              >
                <Download className="mr-3 h-4 w-4" />
                Direct Download (Recommended)
              </Button>
              
              <Button 
                onClick={openInNewWindow} 
                variant="outline" 
                className="w-full justify-start"
                size="lg"
              >
                <ExternalLink className="mr-3 h-4 w-4" />
                Open in New Window
              </Button>
              
              <Button 
                onClick={requestViaEmail} 
                variant="outline" 
                className="w-full justify-start"
                size="lg"
              >
                <Mail className="mr-3 h-4 w-4" />
                Request via Email
              </Button>
            </div>
            
            <Button 
              onClick={() => setShowDownloadOptions(false)} 
              variant="ghost" 
              className="w-full mt-4"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;