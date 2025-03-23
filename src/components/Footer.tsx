
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactInfo } from "@/data/contactInfo";

const Footer = () => {
  return (
    <footer className="py-8 border-t bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo size="lg4" onPrimaryBg={true} showText={false} />
            <p className="text-primary-foreground/90 mt-4">
              Professional dog training services in Wrocław
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/home" className="block text-primary-foreground/90 hover:text-primary-foreground">
                Home
              </Link>
              <Link to="/blog" className="block text-primary-foreground/90 hover:text-primary-foreground">
                Blog
              </Link>
              <Link to="/kontakt" className="block text-primary-foreground/90 hover:text-primary-foreground">
                Kontakt
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">Contact Us</h3>
            <ContactInfo 
              contactInfo={contactInfo} 
              options={{
                showBusinessName: false,
                showPersonName: false,
                showNip: false,
              }}
              className="text-primary-foreground/90"
            />
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground">
            © {new Date().getFullYear()} Szczek Szczek. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/80 mt-2 md:mt-0">
            NIP: {contactInfo.nip}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
