
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { siteConfig } from "./config/site";
import MaintenancePage from "./pages/Maintenance";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Nosework from "./pages/training/Nosework";
import PsiaSzkolka from "./pages/training/PsiaSzkolka";
import PsiePrzedszkole from "./pages/training/PsiePrzedszkole";
import SpacerySocjalizacyjne from "./pages/training/SpacerySocjalizacyjne";
import SalaZabaw from "./pages/training/SalaZabaw";
import TreningiIndywidualne from "./pages/training/TreningiIndywidualne";
import KonsultacjeBehawioralne from "./pages/training/KonsultacjeBehawioralne";
import Kontakt from "./pages/Kontakt";
import Gallery from "./pages/Gallery";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/" 
            element={siteConfig.maintenanceMode ? <MaintenancePage /> : <Navigate to="/home" replace />} 
          />
          <Route path="/home" element={<Index />} />
          <Route path="/training/nosework" element={<Nosework />} />
          <Route path="/training/psia-szkolka" element={<PsiaSzkolka />} />
          <Route path="/training/psie-przedszkole" element={<PsiePrzedszkole />} />
          <Route path="/training/spacery-socjalizacyjne" element={<SpacerySocjalizacyjne />} />
          <Route path="/training/sala-zabaw" element={<SalaZabaw />} />
          <Route path="/training/treningi-indywidualne" element={<TreningiIndywidualne />} />
          <Route path="/training/konsultacje-behawioralne" element={<KonsultacjeBehawioralne />} />
          {/* Redirect from old contact page to kontakt */}
          <Route path="/contact" element={<Navigate to="/kontakt" replace />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
