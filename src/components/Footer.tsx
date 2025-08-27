import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">About Wanderly</h3>
            <p className="text-slate-300 text-sm mb-4">
              Your trusted travel companion for discovering amazing destinations, 
              planning memorable trips, and experiencing the world's wonders.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/wanderly" 
                className="text-slate-300 hover:text-accent transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/wanderly" 
                className="text-slate-300 hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8-.567-1.069-.449-2.4.298-3.346L12.017 4.2l6.286 7.644c.747.946.865 2.277.298 3.346-.568 1.07-1.719 1.8-3.016 1.8H8.449z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations/goa" className="text-slate-300 hover:text-accent transition-colors">Goa, India</Link></li>
              <li><Link to="/destinations/paris" className="text-slate-300 hover:text-accent transition-colors">Paris, France</Link></li>
              <li><Link to="/destinations/bali" className="text-slate-300 hover:text-accent transition-colors">Bali, Indonesia</Link></li>
              <li><Link to="/destinations/kyoto" className="text-slate-300 hover:text-accent transition-colors">Kyoto, Japan</Link></li>
              <li><Link to="/destinations/manali" className="text-slate-300 hover:text-accent transition-colors">Manali, India</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="text-slate-300 hover:text-accent transition-colors">All Destinations</Link></li>
              <li><Link to="/articles" className="text-slate-300 hover:text-accent transition-colors">Travel Articles</Link></li>
              <li><Link to="/search" className="text-slate-300 hover:text-accent transition-colors">Travel Tips</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div id="newsletter">
            <h3 className="font-serif font-bold text-lg mb-4">Travel Newsletter</h3>
            <p className="text-slate-300 text-sm mb-4">
              Get the latest travel tips, destination guides, and exclusive offers.
            </p>
            <form className="space-y-3" action="#" method="post">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="w-full btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 Wanderly. All rights reserved. Made with ❤️ for travelers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;