import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import SpotkaniaPrzezPlot from "./pages/training/SpotkaniaPrzezPlot";
import LekOut from "./pages/training/LekOut";
import Kontakt from "./pages/Kontakt";
import Gallery from "./pages/Gallery";
import Search from "./pages/Search";
import SpotkaniaPsiarzy from "./pages/SpotkaniaPsiarzy";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import TeamMemberPage from "./pages/TeamMemberPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={siteConfig.maintenanceMode ? <MaintenancePage /> : <Navigate to="/home" replace />}
            />
            <Route path="/home" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<TeamMemberPage />} />
            <Route path="/training/nosework" element={<Nosework />} />
            <Route path="/training/psia-szkolka" element={<PsiaSzkolka />} />
            <Route path="/training/psie-przedszkole" element={<PsiePrzedszkole />} />
            <Route path="/training/spacery-socjalizacyjne" element={<SpacerySocjalizacyjne />} />
            <Route path="/training/spotkania-przez-plot" element={<SpotkaniaPrzezPlot />} />
            <Route path="/training/sala-zabaw" element={<SalaZabaw />} />
            <Route path="/training/treningi-indywidualne" element={<TreningiIndywidualne />} />
            <Route path="/training/konsultacje-behawioralne" element={<KonsultacjeBehawioralne />} />
            <Route path="/training/lekout" element={<LekOut />} />
            <Route path="/contact" element={<Navigate to="/kontakt" replace />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/spotkania-psiarzy" element={<SpotkaniaPsiarzy />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
