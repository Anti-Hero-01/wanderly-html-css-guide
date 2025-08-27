import { Link } from 'react-router-dom';

const Search = () => {
  // Mock search results
  const searchResults = [
    {
      type: 'destination',
      title: 'Goa, India',
      description: 'Sunny beaches, Portuguese heritage, and laid-back vibes make Goa the perfect tropical escape.',
      link: '/destinations/goa',
      category: 'Beach Destination'
    },
    {
      type: 'article',
      title: 'Ultimate Budget Travel Guide to India',
      description: 'Discover how to explore incredible India without breaking the bank. From affordable accommodation to street food gems.',
      link: '/articles/budget-travel-guide',
      category: 'Travel Guide'
    },
    {
      type: 'destination',
      title: 'Bali, Indonesia',
      description: 'Island paradise with temples, rice terraces, and surf-perfect waves awaits travelers.',
      link: '/destinations/bali',
      category: 'Island Destination'
    },
    {
      type: 'article',
      title: 'Beach Packing List: 20 Essentials You\'ll Actually Use',
      description: 'Master the art of <mark>beach</mark> packing with our comprehensive list of must-have items.',
      link: '/articles/beach-packing-list',
      category: 'Packing Tips'
    },
    {
      type: 'destination',
      title: 'Paris, France',
      description: 'Art, fashion, and iconic landmarks at every corner in the City of Light.',
      link: '/destinations/paris',
      category: 'City Destination'
    },
    {
      type: 'article',
      title: 'How to Plan a 3-Day Paris City Break',
      description: 'Make the most of a short <mark>Paris</mark> visit with our expertly crafted itinerary.',
      link: '/articles/paris-city-break',
      category: 'City Guide'
    }
  ];

  return (
    <div className="py-8">
      <div className="container max-w-4xl">
        {/* Search Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Search Results
          </h1>
          
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search destinations, articles, tips..."
              defaultValue="beach destinations"
              className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <span className="btn-primary">
                Search
              </span>
            </button>
          </div>

          <p className="text-muted-foreground">
            Found <strong>{searchResults.length} results</strong> for "<strong>beach destinations</strong>"
          </p>
        </header>

        {/* Search Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button className="chip chip-primary">All Results</button>
            <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
              Destinations
            </button>
            <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
              Articles
            </button>
            <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
              Guides
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          {searchResults.map((result, index) => (
            <article key={index} className="card">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Result Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {result.type === 'destination' ? (
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Result Content */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <span className="chip chip-muted text-xs">
                        {result.category}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold mb-2 hover:text-primary transition-colors">
                      <Link to={result.link}>
                        {result.title}
                      </Link>
                    </h3>
                    
                    <p 
                      className="text-muted-foreground mb-4 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: result.description }}
                    />
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        to={result.link}
                        className="text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                      >
                        {result.type === 'destination' ? 'View Destination' : 'Read Article'} →
                      </Link>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Relevance: 95%</span>
                        <button className="hover:text-primary transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results State (Hidden by default) */}
        <div className="hidden text-center py-16">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-bold mb-2">No results found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search terms or browse our popular destinations and articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations" className="btn-primary">
              Browse Destinations
            </Link>
            <Link to="/articles" className="btn-ghost">
              Read Articles
            </Link>
          </div>
        </div>

        {/* Search Suggestions */}
        <section className="mt-16">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold mb-6">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                budget travel tips
              </button>
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                solo travel safety
              </button>
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                mountain destinations
              </button>
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                packing lists
              </button>
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                cultural etiquette
              </button>
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                food guides
              </button>
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                city breaks
              </button>
              <button className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-colors">
                photography tips
              </button>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <nav className="mt-12 flex justify-center" aria-label="Search pagination">
          <div className="flex items-center space-x-2">
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
              3
            </button>
            <button className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors">
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Search;