
import { ReactNode } from "react";

interface TrainingLayoutProps {
  title: string;
  subtitle: string;
  iconName?: string;
  imageSrc?: string;
  imageAlt: string;
  sidebarContent: ReactNode;
  children: ReactNode;
}

const TrainingLayout = ({
  title,
  subtitle,
  iconName,
  imageSrc,
  imageAlt,
  sidebarContent,
  children,
}: TrainingLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-32 pb-12 lg:pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 uppercase">{title}</h1>
            {subtitle && <h2 className="text-xl mb-6">{subtitle}</h2>}
            
            <div className="relative mb-6 flex justify-center items-center">
              {iconName ? (
                <div className="w-40 h-40 my-4">
                  <img 
                    src={`/icons/${iconName}-hover.svg`} 
                    alt={imageAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : imageSrc ? (
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="rounded-lg w-full h-64 object-cover"
                />
              ) : null}
            </div>
            
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>

          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <div className="bg-card rounded-lg p-6 shadow-md sticky top-24">
              {sidebarContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingLayout;
