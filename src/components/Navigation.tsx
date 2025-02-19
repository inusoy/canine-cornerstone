
import { useState } from "react";
import { PawPrint, Instagram, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-primary animate-float" />
            <Link to="/" className="font-playfair text-xl font-semibold">
              Canine Academy
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Training
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2 space-y-1">
                  <Link
                    to="/training/nosework"
                    className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                  >
                    Nosework
                  </Link>
                  <Link
                    to="/training/obedience"
                    className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                  >
                    Obedience
                  </Link>
                  <Link
                    to="/training/dog-school"
                    className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                  >
                    Dog School
                  </Link>
                  <Link
                    to="/training/puppy-kindergarten"
                    className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                  >
                    Puppy Kindergarten
                  </Link>
                  <Link
                    to="/training/socialisation-walks"
                    className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                  >
                    Socialisation Walks
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href="https://www.instagram.com/szczekszczekwroclaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Visit our Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button
              variant="default"
              className="hover-lift"
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
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
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-background z-50">
          <div className="p-4 space-y-4 bg-background">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground px-4">Training</h3>
              <Link
                to="/training/nosework"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosework
              </Link>
              <Link
                to="/training/obedience"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Obedience
              </Link>
              <Link
                to="/training/dog-school"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dog School
              </Link>
              <Link
                to="/training/puppy-kindergarten"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Puppy Kindergarten
              </Link>
              <Link
                to="/training/socialisation-walks"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Socialisation Walks
              </Link>
            </div>
            <div className="border-t pt-4 space-y-4">
              <Link
                to="/blog"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://www.instagram.com/szczekszczekwroclaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <div className="px-4">
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView();
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
