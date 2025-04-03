interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
  onItemClick?: () => void;
  showIcons?: {
    instagram?: boolean;
    facebook?: boolean;
  };
}

export const SocialLinks = ({ 
  className = "", 
  showLabels = false, 
  onItemClick,
  showIcons = { instagram: true, facebook: true }
}: SocialLinksProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {showIcons.instagram && (
        <a
          href="https://www.instagram.com/szczekszczekwroclaw/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-primary transition-colors"
          onClick={onItemClick}
        >
          <img src="/icons/brands/instagram.svg" alt="Instagram" className="h-5 w-5" />
          {showLabels && <span>Instagram</span>}
        </a>
      )}
      {showIcons.facebook && (
        <a
          href="https://www.facebook.com/profile.php?id=100089173953561"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-primary transition-colors"
          onClick={onItemClick}
        >
          <img src="/icons/brands/facebook.svg" alt="Facebook" className="h-5 w-5" />
          {showLabels && <span>Facebook</span>}
        </a>
      )}
    </div>
  );
};
