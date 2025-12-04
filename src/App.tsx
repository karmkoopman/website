import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import OverOns from "./pages/OverOns";
import Werkzaamheden from "./pages/Werkzaamheden";
import Projecten from "./pages/Projecten";
import Offerte from "./pages/Offerte";
import Review from "./pages/Review";
import Schilderwerk from "./pages/Schilderwerk";
import HoutrotReparatie from "./pages/HoutrotReparatie";
import Glaszetten from "./pages/Glaszetten";
import Timmerwerk from "./pages/Timmerwerk";
import Reparatiewerk from "./pages/Reparatiewerk";
import Portfolio from "./pages/Portfolio";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll naar boven bij elke routewijziging
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/werkzaamheden" element={<Werkzaamheden />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/offerte" element={<Offerte />} />
          <Route path="/schilderwerk" element={<Schilderwerk />} />
          <Route path="/houtrot-reparatie" element={<HoutrotReparatie />} />
          <Route path="/glaszetten" element={<Glaszetten />} />
          <Route path="/timmerwerk" element={<Timmerwerk />} />
          <Route path="/reparatiewerk" element={<Reparatiewerk />} />
          <Route path="/review" element={<Review />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
