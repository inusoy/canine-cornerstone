
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactInfo } from "@/data/contactInfo";

const Footer = () => {
  return (
    <footer className="py-8 border-t bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <Logo size="lg4" onPrimaryBg={true} showText={false} className="mb-6" />
          
          <ContactInfo 
            contactInfo={contactInfo}
            className="text-primary-foreground/90 max-w-md"
          />
          
          <div className="mt-8 space-y-2">
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/home" className="text-primary-foreground/90 hover:text-primary-foreground">
                Home
              </Link>
              <Link to="/blog" className="text-primary-foreground/90 hover:text-primary-foreground">
                Blog
              </Link>
              <Link to="/kontakt" className="text-primary-foreground/90 hover:text-primary-foreground">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground">
            © {new Date().getFullYear()} Szczek Szczek. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/80 mt-2">
            NIP: {contactInfo.nip}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
