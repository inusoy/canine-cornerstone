import React from 'react';

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
  customLinks?: CustomLink[];
  title?: string;
}

export const SignupInfo: React.FC<SignupInfoProps> = ({
  showFacebook = true,
  showInstagram = true,
  showSMS = true,
  showContactForm = true,
  customLinks = [],
  title = "JAK SIĘ ZAPISAĆ?"
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
        {customLinks.map((link, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-primary hover:underline"><a href={link.url}>{link.text}</a></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignupInfo;
