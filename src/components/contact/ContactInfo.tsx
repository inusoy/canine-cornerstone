import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactInfoType } from "@/data/contactInfo";

export type ContactInfoDisplayOptions = {
  showBusinessName?: boolean;
  showPersonName?: boolean;
  showNip?: boolean;
  showPhone?: boolean;
  showEmail?: boolean;
  showAddress?: boolean;
};

const defaultOptions: ContactInfoDisplayOptions = {
  showBusinessName: true,
  showPersonName: true,
  showNip: true,
  showPhone: true,
  showEmail: true,
  showAddress: true,
};

interface ContactInfoProps {
  contactInfo: ContactInfoType;
  options?: Partial<ContactInfoDisplayOptions>;
  className?: string;
  centered?: boolean;
}

export const ContactInfo = ({
  contactInfo,
  options = defaultOptions,
  className,
  centered = false,
}: ContactInfoProps) => {
  const displayOptions = { ...defaultOptions, ...options };
  
  return (
    <div className={cn(centered ? "space-y-2" : "space-y-4", className)}>
      {displayOptions.showBusinessName && (
        <h3 className="text-2xl">{contactInfo.businessName}</h3>
      )}
      
      {displayOptions.showPersonName && (
        <p className="text-lg">{contactInfo.personName}</p>
      )}
      
      {displayOptions.showNip && (
        <p>NIP: {contactInfo.nip}</p>
      )}
      
      <div className="space-y-2">
        {displayOptions.showPhone && (
          <div className={cn("flex items-center gap-2", centered && "justify-center")}>
            {!centered && (
              <Phone className="h-5 w-5 text-primary" />
            )}
            <a href={`tel:${contactInfo.phone}`} className="transition-colors hover:text-primary">
              {contactInfo.phone}
            </a>
          </div>
        )}
        
        {displayOptions.showEmail && (
          <div className={cn("flex items-center gap-2", centered && "justify-center")}>
            {!centered && (
              <Mail className="h-5 w-5 text-primary" />
            )}
            <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-primary">
              {contactInfo.email}
            </a>
          </div>
        )}
        
        {displayOptions.showAddress && (
          <div className={cn("flex items-center gap-2", centered && "justify-center")}>
            {!centered && (
              <MapPin className="h-5 w-5 text-primary" />
            )}
            {centered ? (
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`} 
                className="transition-colors hover:text-primary-foreground/75"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo.address}
              </a>
            ) : (
              <span>{contactInfo.address}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
