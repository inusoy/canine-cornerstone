
import { PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-5 w-5 text-primary" />
            <span className="font-playfair font-semibold">Canine Academy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
