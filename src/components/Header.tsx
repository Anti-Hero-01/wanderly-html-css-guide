import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="container">
        <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-serif font-bold text-primary">Wanderly</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </Link>
            <Link to="/articles" className="text-foreground hover:text-primary transition-colors">
              Articles
            </Link>
            <Link to="/search" className="text-foreground hover:text-primary transition-colors">
              Travel Tips
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#newsletter" className="btn-primary">
              Subscribe
            </a>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2" aria-label="Toggle mobile menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;