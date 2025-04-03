
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface TrainingLayoutProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  sidebarContent?: ReactNode;
}

const TrainingLayout = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  sidebarContent,
}: TrainingLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className={`text-5xl font-bryndan mb-6 text-primary ${isMobile ? 'text-center' : 'text-left'} uppercase`}>
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6 prose max-w-none">
              {children}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <Card className="p-6 shadow-md">
                  <ScrollArea className="max-h-[calc(100vh-200px)]">
                    <div className="space-y-6">
                      {sidebarContent}
                      {/* <Button asChild className="w-full uppercase">
                        <Link to="/kontakt">ZAREZERWUJ SESJĘ</Link>
                      </Button> */}
                    </div>
                  </ScrollArea>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingLayout;
