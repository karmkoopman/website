import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OverOns from "./pages/OverOns";
import Werkzaamheden from "./pages/Werkzaamheden";
import Projecten from "./pages/Projecten";
import Offerte from "./pages/Offerte";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/website">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/werkzaamheden" element={<Werkzaamheden />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="/offerte" element={<Offerte />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
