import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold mb-6 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track to discover amazing destinations.
        </p>
        <a href="/" className="btn-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
