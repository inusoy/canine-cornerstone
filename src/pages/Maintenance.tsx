import { useLocation, Navigate } from "react-router-dom";
import { SocialLinks } from "@/components/navigation/SocialLinks";
const MaintenancePage = () => {
  const {
    search
  } = useLocation();
  const params = new URLSearchParams(search);
  const accessKey = params.get("access");

  // If correct access key is provided, show the main website
  if (accessKey === "dev-preview") {
    return <Navigate to="/home" replace />;
  }
  return <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center mb-8">
          <img src="/lovable-uploads/23489cfb-856c-4f3f-908f-3aa9d5cb11b8.png" alt="Szczek Szczek Logo" className="h-20 w-20 animate-float" />
        </div>
        <h1 className="font-bryndan font-bold mb-4 text-6xl">Strona w Budowie</h1>
        <p className="text-xl font-josefin text-muted-foreground mb-6">
          Witamy na stronie Szczek Szczek! Aktualnie pracujemy nad nową wersją
          naszej strony, aby zapewnić Państwu jeszcze lepsze doświadczenia.
        </p>
        <p className="text-lg font-josefin text-muted-foreground">
          Zapraszamy wkrótce!
        </p>
        <div className="mt-8 text-sm font-josefin text-muted-foreground">
          <div className="mb-2">Znajdź nas na:</div>
          <SocialLinks className="justify-center" showLabels />
        </div>
      </div>
    </div>;
};
export default MaintenancePage;