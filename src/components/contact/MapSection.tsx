
export default function MapSection() {
  return (
    <div className="h-[300px] md:h-[400px] w-full rounded-md overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8798290515224!2d17.0261458!3d51.1075649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2796ca4ca55%3A0xb26e54dbb10a5bbd!2sGwarecka%208%2C%2050-131%20Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1718115201458!5m2!1sen!2spl" 
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Szczek Szczek location"
      ></iframe>
    </div>
  );
}
