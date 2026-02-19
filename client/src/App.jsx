import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "/Users/leosteel/code/Portfolio-Builder/client/src/components/ui/toaster";
import { TooltipProvider } from "/Users/leosteel/code/Portfolio-Builder/client/src/components/ui/tooltip";
import NotFound from "/Users/leosteel/code/Portfolio-Builder/client/src/pages/not-found";
import HomePage from "/Users/leosteel/code/Portfolio-Builder/client/src/pages/home"; 

function Router() {
  return (
    <Switch>
      {/* Route for your main portfolio page */}
      <Route path="/" component={HomePage} />
      
      {/* Fallback for any broken links */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Provides pop-up alerts for things like "Email Copied" or "CV Downloaded" */}
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
