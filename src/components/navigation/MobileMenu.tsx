
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { TrainingMenu } from "./TrainingMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
  onNavigation: (sectionId: string) => void;
}

export const MobileMenu = ({ isOpen, onClose, onSearchOpen, onNavigation }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 top-[65px] bg-background z-50">
      <div className="p-4 space-y-4 bg-background">
        <button
          onClick={() => {
            onSearchOpen();
            onClose();
          }}
          className="w-full text-left font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
        >
          Search
        </button>
        <div className="space-y-2">
          <button
            onClick={() => {
              onNavigation("services");
              onClose();
            }}
            className="w-full text-left font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
          >
            Training Programs
          </button>
          <TrainingMenu onClick={onClose} mobile />
        </div>
        <div className="border-t pt-4 space-y-4">
          <button
            onClick={() => {
              onNavigation("about");
              onClose();
            }}
            className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors"
          >
            About
          </button>
          <button
            onClick={() => {
              onNavigation("testimonials");
              onClose();
            }}
            className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors"
          >
            Testimonials
          </button>
          <Link
            to="/blog"
            className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
            onClick={onClose}
          >
            Blog
          </Link>
          <SocialLinks className="px-4" showLabels onItemClick={onClose} />
          <div className="px-4">
            <Button
              variant="default"
              className="w-full"
              onClick={() => {
                onNavigation("contact");
                onClose();
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
