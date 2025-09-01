import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="py-section px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="evidence-card">
          <CardContent className="p-12">
            <div className="space-y-6">
              <div className="text-6xl font-bold text-primary mb-4">404</div>
              <h1 className="text-3xl font-bold heading-clinical mb-4">
                Page Not Found
              </h1>
              <p className="text-clinical text-lg leading-relaxed">
                Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button asChild size="lg">
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NotFound;