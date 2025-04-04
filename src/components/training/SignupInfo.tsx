import React from 'react';
import { Button } from "@/components/ui/button";
import PriceTag from './PriceTag';

// Interfejs dla niestandardowego linku
interface CustomLink {
  text: string;
  url: string;
}

// Props komponentu
interface SignupInfoProps {
  showFacebook?: boolean;
  showInstagram?: boolean;
  showSMS?: boolean;
  showContactForm?: boolean;
  title?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  price?: string;
  priceAsterisk?: string;
}

export const SignupInfo: React.FC<SignupInfoProps> = ({
  showFacebook = true,
  showInstagram = true,
  showSMS = true,
  showContactForm = true,
  title = "JAK SIĘ ZAPISAĆ?",
  showButton = false,
  buttonText = "",
  buttonUrl = "",
  price = "",
  priceAsterisk = "",
}) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <ul className="space-y-2 mt-2">
        {showFacebook && (
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span> Poprzez wiadomość prywatną na <a href="https://www.facebook.com/profile.php?id=100089173953561">Facebooku</a>,</span>
          </li>
        )}
        {showInstagram && (
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span> Poprzez wiadomość prywatną na <a href="https://www.instagram.com/szczekszczekwroclaw/">Instagramie</a>,</span>
          </li>
        )}
        {showSMS && (
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>SMSem <a href="tel:+48504267825">+48 504 267 825</a>.</span>
          </li>
        )}
        {showContactForm && (
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Przez <a href="/kontakt">formularz kontaktowy</a>.</span>
          </li>
        )}
      </ul>
      {price && (
        <PriceTag>
          {price}
        </PriceTag>
      )}
      {priceAsterisk && (
        <p className="text-sm text-primary mt-2">{priceAsterisk}</p>)}
      {showButton && (
        <div className="mt-4">
          <Button
            className="w-full bg-primary text-white hover-lift uppercase font-josefin"
            onClick={() => window.open(buttonUrl, "_blank")}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignupInfo;
