
import { Instagram, Facebook } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
  onItemClick?: () => void;
}

export const SocialLinks = ({ className = "", showLabels = false, onItemClick }: SocialLinksProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a
        href="https://www.instagram.com/szczekszczekwroclaw/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-primary transition-colors"
        onClick={onItemClick}
      >
        <Instagram className="h-5 w-5" />
        {showLabels && <span>Instagram</span>}
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100089173953561"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-primary transition-colors"
        onClick={onItemClick}
      >
        <Facebook className="h-5 w-5" />
        {showLabels && <span>Facebook</span>}
      </a>
    </div>
  );
};
