import { PawPrint } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const Footer = () => {
  return (
    <footer className="py-8 border-t bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo size="lg4" onPrimaryBg={true} showText={false} />
          </div>
          <p className="text-sm text-primary-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
