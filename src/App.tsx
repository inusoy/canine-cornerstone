
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Nosework from "./pages/training/Nosework";
import Obedience from "./pages/training/Obedience";
import DogSchool from "./pages/training/DogSchool";
import PuppyKindergarten from "./pages/training/PuppyKindergarten";
import SocialisationWalks from "./pages/training/SocialisationWalks";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/training/nosework" element={<Nosework />} />
          <Route path="/training/obedience" element={<Obedience />} />
          <Route path="/training/dog-school" element={<DogSchool />} />
          <Route path="/training/puppy-kindergarten" element={<PuppyKindergarten />} />
          <Route path="/training/socialisation-walks" element={<SocialisationWalks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
