import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    // Updated to match your site's dark background and font
    <div className="min-h-screen w-full flex items-center justify-center bg-black font-sans">
      <Card className="glass w-full max-w-md mx-4 border-white/10 bg-white/5">
        <CardContent className="pt-8 pb-10 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="h-16 w-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="h-10 w-10 text-red-500" />
            </div>
            <h1 className="text-3xl font-serif text-white">404</h1>
            <p className="text-primary font-mono text-xs uppercase tracking-widest mt-1">Page Not Found</p>
          </div>

          <p className="text-gray-400 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Button asChild className="rounded-full px-8 shadow-lg shadow-primary/20">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}