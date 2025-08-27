import { useState } from 'react';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedTheme, setSelectedTheme] = useState<string>('All');

  const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];
  const themes = ['All', 'Beaches', 'Mountains', 'Culture', 'Nightlife', 'Adventure', 'History'];

  const filteredDestinations = destinations.filter(destination => {
    const regionMatch = selectedRegion === 'All' || destination.region === selectedRegion;
    const themeMatch = selectedTheme === 'All' || destination.tags.includes(selectedTheme);
    return regionMatch && themeMatch;
  });

  return (
    <div className="py-8">
      <div className="container">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Destinations
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collection of destinations around the world. 
            From pristine beaches to majestic mountains, discover your next adventure with detailed guides and insider tips.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Region Filter */}
              <div>
                <h3 className="font-serif font-bold text-lg mb-4">Filter by Region</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`chip transition-all ${
                        selectedRegion === region
                          ? 'chip-primary'
                          : 'chip-muted hover:bg-primary-light hover:text-primary-dark'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Filter */}
              <div>
                <h3 className="font-serif font-bold text-lg mb-4">Filter by Theme</h3>
                <div className="flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setSelectedTheme(theme)}
                      className={`chip transition-all ${
                        selectedTheme === theme
                          ? 'chip-accent'
                          : 'chip-muted hover:bg-accent-light hover:text-accent-dark'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedRegion !== 'All' || selectedTheme !== 'All') && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  <div className="flex gap-2">
                    {selectedRegion !== 'All' && (
                      <span className="chip chip-primary">
                        {selectedRegion}
                        <button
                          onClick={() => setSelectedRegion('All')}
                          className="ml-1 hover:text-primary-dark"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {selectedTheme !== 'All' && (
                      <span className="chip chip-accent">
                        {selectedTheme}
                        <button
                          onClick={() => setSelectedTheme('All')}
                          className="ml-1 hover:text-accent-dark"
                        >
                          ×
                        </button>
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRegion('All');
                      setSelectedTheme('All');
                    }}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Destination Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredDestinations.map((destination) => (
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
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">No destinations found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedTheme('All');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination (Static) */}
        {filteredDestinations.length > 0 && (
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2" aria-label="Pagination">
              <button className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors">
                2
              </button>
              <button className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;