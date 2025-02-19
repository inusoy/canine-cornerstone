
import { useState } from "react";
import { Menu, X, Search as SearchIcon } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "./navigation/SocialLinks";
import { TrainingMenu } from "./navigation/TrainingMenu";
import { SearchDialog } from "./navigation/SearchDialog";
import { MobileMenu } from "./navigation/MobileMenu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/23489cfb-856c-4f3f-908f-3aa9d5cb11b8.png" 
              alt="Szczek Szczek Logo" 
              className="h-8 w-8"
            />
            <Link to="/" className="font-playfair text-xl font-semibold">
              Szczek Szczek
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-primary transition-colors"
              aria-label="Open search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <div className="relative group">
              <button
                onClick={() => handleNavigation("services")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Training
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <TrainingMenu className="p-2 space-y-1" />
              </div>
            </div>
            <button
              onClick={() => handleNavigation("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("testimonials")}
              className="hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <SocialLinks />
            <Button
              variant="default"
              className="hover-lift"
              onClick={() => handleNavigation("contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSearchOpen={() => setIsSearchOpen(true)}
        onNavigation={handleNavigation}
      />

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </nav>
  );
};

export default Navigation;
