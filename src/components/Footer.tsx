import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactInfo } from "@/data/contactInfo";

const Footer = () => {
  return (
    <footer className="py-8 border-t bg-primary uppercase">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <Logo 
            size="lg4" 
            onPrimaryBg={true} 
            showText={false} 
            className="mb-6" 
            imageClassName="h-24 w-24"
          />
          
          <ContactInfo 
            contactInfo={contactInfo}
            className="text-primary-foreground/90 max-w-md"
            centered={true}
            onPrimaryBg={true}
          />
          
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground">
            © {new Date().getFullYear()} Szczek Szczek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
