
import { useState } from "react";
import { PawPrint, Instagram, Menu, X, Search as SearchIcon } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/components/ServicesSection";
import { blogPosts } from "@/pages/blog/[slug]";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

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
      // Wait for navigation to complete before scrolling
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

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
              <button
                onClick={() => handleNavigation("services")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Training
              </button>
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
            <button
              onClick={() => handleNavigation("testimonials")}
              className="hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-primary transition-colors"
              aria-label="Open search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
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
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-background z-50">
          <div className="p-4 space-y-4 bg-background">
            <div className="space-y-2">
              <button
                onClick={() => {
                  handleNavigation("services");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              >
                Training Programs
              </button>
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
              <button
                onClick={() => {
                  handleNavigation("testimonials");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  handleNavigation("about");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors"
              >
                About
              </button>
              <Link
                to="/blog"
                className="block px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
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
                    handleNavigation("contact");
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

      {/* Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Search trainings and blog posts..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Training Programs">
            {services.map((service) => (
              <CommandItem
                key={service.link}
                onSelect={() => {
                  setIsSearchOpen(false);
                  navigate(service.link);
                }}
              >
                <div className="flex flex-col">
                  <span>{service.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Blog Posts">
            {blogPosts.map((post) => (
              <CommandItem
                key={post.slug}
                onSelect={() => {
                  setIsSearchOpen(false);
                  navigate(`/blog/${post.slug}`);
                }}
              >
                <div className="flex flex-col">
                  <span>{post.title}</span>
                  <div className="flex gap-2 mt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </nav>
  );
};

export default Navigation;
