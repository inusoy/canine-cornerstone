import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { TrainingMenu } from "./TrainingMenu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
  onNavigation: (e: React.MouseEvent, path: string) => void;
}

export const MobileMenu = ({ isOpen, onClose, onSearchOpen, onNavigation }: MobileMenuProps) => {
  if (!isOpen) return null;

  // Ensure menu closing function properly resets body styles
  const handleItemClick = (e: React.MouseEvent, path?: string) => {
    // Ensure body styles are reset
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    
    if (path) {
      onNavigation(e, path);
    }
    
    // Force close the menu
    onClose();
  };

  return (
    <div
      className="md:hidden fixed inset-0 top-[65px] bg-background z-50"
      style={{
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "contain",
        maxHeight: "100vh",
        height: "calc(100vh - 65px)" // Add explicit height
      }}
    >
      <div className="p-4 space-y-4 bg-background">
        <button
          onClick={() => {
            onSearchOpen();
            onClose();
          }}
          className="w-full text-left font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase"
        >
          WYSZUKAJ
        </button>
        <div className="space-y-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="offer" className="border-none">
              <AccordionTrigger className="py-2 px-4 hover:bg-muted rounded-md transition-colors uppercase font-medium">
                OFERTA
              </AccordionTrigger>
              <AccordionContent className="pt-1">
                <TrainingMenu onClick={onClose} mobile className="pl-2" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="border-t pt-4 space-y-4">
          <button
            onClick={(e) => handleItemClick(e, "about")}
            className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase"
          >
            O MNIE
          </button>
          <Link
            to="/gallery"
            className="block px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase"
            onClick={onClose}
          >
            GALERIA
          </Link>
          <Link
            to="/spotkania-psiarzy"
            className="block px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase"
            onClick={onClose}
          >
            WYDARZENIA
          </Link>
          <Link
            to="/kontakt"
            className="block px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase"
            onClick={onClose}
          >
            KONTAKT
          </Link>
          <div className="px-4">
            <Button
              variant="default"
              className="w-full uppercase"
              onClick={() => {
                window.location.href = "/training/sala-zabaw";
                onClose();
              }}
            >
              SALA ZABAW I EKSPLORACJI
            </Button>
          </div>
          <SocialLinks className="px-4" showLabels onItemClick={onClose} />
        </div>
      </div>
    </div>
  );
};
