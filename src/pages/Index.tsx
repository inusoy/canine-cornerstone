
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // Handle animations
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Handle scrolling to section if coming from another page
    if (location.state?.scrollTo && initialRender) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Small timeout to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setInitialRender(false);
        }, 100);
      }
    } else if (initialRender) {
      // If there's no specific section to scroll to, ensure we're at the top
      window.scrollTo(0, 0);
      setInitialRender(false);
    }
  }, [location.state, initialRender]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
