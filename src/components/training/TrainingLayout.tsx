import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface TrainingLayoutProps {
  title: string;
  children: ReactNode;
  sidebarContent?: ReactNode;
  backgroundImage?: string;
}

const TrainingLayout = ({
  title,
  children,
  sidebarContent,
  backgroundImage,
}: TrainingLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32 pb-16 relative">
        {backgroundImage && (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src={backgroundImage}
              alt=""
              className="object-cover w-full h-full opacity-5"
              loading="lazy"
            />
          </div>
        )}
        <div className="container mx-auto px-4">
          <h1
            className={`text-5xl font-bryndan mb-6 text-primary ${
              isMobile ? "text-center" : "text-left"
            } uppercase`}
          >
            {title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6 prose max-w-none mobile-text-justify">
              {children}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <Card className="p-6 shadow-md">
                  <div className="space-y-6 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto lg:pr-2">
                    {sidebarContent}
                  </div>
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
