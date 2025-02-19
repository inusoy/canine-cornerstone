
import { useLocation, Navigate } from "react-router-dom";
import { PawPrint } from "lucide-react";

const MaintenancePage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const accessKey = params.get("access");

  // If correct access key is provided, show the main website
  if (accessKey === "dev-preview") {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center mb-8">
          <PawPrint className="h-16 w-16 text-primary animate-float" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Strona w Budowie</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Witamy na stronie Szczek Szczek! Aktualnie pracujemy nad nową wersją
          naszej strony, aby zapewnić Państwu jeszcze lepsze doświadczenia.
        </p>
        <p className="text-lg text-muted-foreground">
          Zapraszamy wkrótce!
        </p>
        <div className="mt-8 text-sm text-muted-foreground">
          Kontakt: 
          <a href="tel:+48531931532" className="hover:text-primary ml-1">
            +48 531 931 532
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
