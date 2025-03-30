
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";
import { TrainingMenu } from "./TrainingMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
  onNavigation: (e: React.MouseEvent, path: string) => void;
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
          className="w-full text-left font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase"
        >
          WYSZUKAJ
        </button>
        <div className="space-y-2">
          <Link
            to="/offer"
            className="block w-full text-left font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors uppercase"
            onClick={onClose}
          >
            OFERTA
          </Link>
          <TrainingMenu onClick={onClose} mobile />
        </div>
        <div className="border-t pt-4 space-y-4">
          <button
            onClick={(e) => {
              onNavigation(e, "about");
              onClose();
            }}
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
