import { Link } from 'react-router-dom';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import heroImage from '@/assets/hero-wanderly.jpg';

const Index = () => {
  // Get featured destinations (first 6)
  const featuredDestinations = destinations.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center hero-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-overlay"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Plan smarter. Travel happier.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Expert-curated guides, practical tips, and the best places to visit around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations" className="btn-primary">
              Explore Destinations
            </Link>
            <Link to="/articles" className="btn-ghost text-white border-white hover:bg-white hover:text-slate-900">
              Read Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-background">
        <div className="container">
          <header className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Destinations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover handpicked destinations that offer incredible experiences and unforgettable memories.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                slug={destination.slug}
                name={destination.name}
                country={destination.country}
                region={destination.region}
                description={destination.description}
                image={destination.image}
                tags={destination.tags}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Top Collections */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <header className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Top Collections
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore destinations by theme and find your perfect getaway.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">Beach Escapes</h3>
                <p className="text-white/90">Sun, sand, and crystal-clear waters await</p>
              </div>
            </article>
            
            <article className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-dark"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">Mountain Getaways</h3>
                <p className="text-white/90">Find peace in breathtaking alpine landscapes</p>
              </div>
            </article>
            
            <article className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-900"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">City Breaks</h3>
                <p className="text-white/90">Urban adventures and cultural discoveries</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-background">
        <div className="container">
          <header className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Travel Tips & Guides
            </h2>
            <p className="text-muted-foreground text-lg">
              Expert advice to make your travels smooth and memorable.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="card">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Budget Travel</h3>
                <p className="text-muted-foreground mb-4">
                  Discover how to travel more while spending less with our money-saving tips and tricks.
                </p>
                <Link to="/articles/budget-travel-guide" className="text-primary hover:text-primary-dark font-medium">
                  Read Guide →
                </Link>
              </div>
            </article>
            
            <article className="card">
              <div className="p-6">
                <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Solo Travel</h3>
                <p className="text-muted-foreground mb-4">
                  Embrace the freedom of solo adventures with safety tips and destination recommendations.
                </p>
                <Link to="/articles/solo-travel-guide" className="text-primary hover:text-primary-dark font-medium">
                  Read Guide →
                </Link>
              </div>
            </article>
            
            <article className="card">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 9a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Local Food Guides</h3>
                <p className="text-muted-foreground mb-4">
                  Taste authentic flavors and discover hidden culinary gems around the world.
                </p>
                <Link to="/articles/local-food-guide" className="text-primary hover:text-primary-dark font-medium">
                  Read Guide →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 text-center">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-medium">Expert-curated</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-medium">Up-to-date info</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.997 2.997 0 0 0 17.03 7c-.8 0-1.54.36-2.03.97l-2.89 3.63A1.998 1.998 0 0 0 14 13.5v2.5h-2v-6c0-.8.4-1.54 1.06-1.95L17.58 6c.46-.37 1-.58 1.56-.58 1.85 0 3.35 1.5 3.35 3.35V22h-2.49z"/>
              </svg>
              <span className="font-medium">Traveler-friendly</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;