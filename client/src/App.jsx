import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import Chatbot from "@/pages/Chatbot";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Your UI providers (Toaster handles your alerts) */}
        <Toaster />
        
        <BrowserRouter>
          <Routes>
            {/* Main Portfolio Route */}
            <Route path="/" element={<Home />} />
            
            {/* Your new internal Chatbot route */}
            <Route path="/chatbot" element={<Chatbot />} />
            
            {/* Fallback for broken links (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
      </TooltipProvider>
    </QueryClientProvider>
  );
}