import { useParams, Link } from 'react-router-dom';
import { getDestinationBySlug } from '@/data/destinations';

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = slug ? getDestinationBySlug(slug) : undefined;

  if (!destination) {
    return (
      <div className="container py-16 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Destination Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the destination you're looking for.
        </p>
        <Link to="/destinations" className="btn-primary">
          Browse All Destinations
        </Link>
      </div>
    );
  }

  return (
    <article>
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 container h-full flex items-end pb-16">
          <div className="text-white">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center space-x-4">
              <span className="chip chip-accent">
                {destination.country}
              </span>
              <span className="chip chip-primary">
                {destination.region}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation */}
      <nav className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container">
          <div className="flex items-center space-x-8 py-4 overflow-x-auto">
            <a href="#overview" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
              Overview
            </a>
            <a href="#sights" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
              Top Sights
            </a>
            <a href="#when-to-go" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
              When to Go
            </a>
            <a href="#getting-there" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
              Getting There
            </a>
            <a href="#stay" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
              Where to Stay
            </a>
            <a href="#eat-drink" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
              Eat & Drink
            </a>
            <a href="#tips" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
              Practical Tips
            </a>
          </div>
        </div>
      </nav>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section id="overview">
              <h2 className="font-serif text-3xl font-bold mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {destination.overview || destination.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're seeking adventure, relaxation, or cultural immersion, 
                  {destination.name} offers experiences that will create lasting memories. 
                  From its stunning landscapes to its warm hospitality, this destination 
                  has something special for every type of traveler.
                </p>
              </div>
            </section>

            {/* Top Sights */}
            <section id="sights">
              <h2 className="font-serif text-3xl font-bold mb-6">Top Sights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.highlights?.slice(0, 6).map((sight, index) => (
                  <article key={index} className="card">
                    <div className="aspect-[4/3] bg-muted rounded-t-2xl"></div>
                    <div className="p-4">
                      <h3 className="font-serif font-bold text-lg mb-2">{sight}</h3>
                      <p className="text-muted-foreground text-sm">
                        A must-visit attraction that showcases the best of {destination.name}'s 
                        cultural heritage and natural beauty.
                      </p>
                    </div>
                  </article>
                )) || (
                  <p className="text-muted-foreground col-span-2">
                    Detailed sight information coming soon. Check back for updates!
                  </p>
                )}
              </div>
              
              <div className="mt-8 p-6 bg-muted rounded-2xl">
                <h3 className="font-serif font-bold text-lg mb-4">Map Placeholder</h3>
                <div className="aspect-[16/9] bg-slate-200 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </section>

            {/* When to Go */}
            <section id="when-to-go">
              <h2 className="font-serif text-3xl font-bold mb-6">When to Go</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl mb-3 text-primary">Peak Season</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Best Time:</strong> {destination.bestTime || 'November to March'}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Perfect weather conditions with clear skies and comfortable temperatures. 
                      Expect larger crowds and higher prices.
                    </p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl mb-3 text-accent">Shoulder Season</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Good Time:</strong> April to June, September to October
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Great balance of good weather and fewer crowds. 
                      Ideal for budget-conscious travelers.
                    </p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl mb-3 text-muted-foreground">Off Season</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Budget Time:</strong> July to August
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Lower prices and fewer tourists, but weather may be less ideal. 
                      Great for authentic local experiences.
                    </p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl mb-3 text-primary">Festivals</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Special Events:</strong> Year-round cultural celebrations
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Experience local culture through traditional festivals and events. 
                      Book accommodation well in advance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting There */}
            <section id="getting-there">
              <h2 className="font-serif text-3xl font-bold mb-6">Getting There</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-xl mb-3">By Air</h3>
                  <p className="text-muted-foreground">
                    The nearest international airport offers direct flights from major cities. 
                    Budget airlines provide affordable options, while full-service carriers 
                    offer premium comfort for longer journeys.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif font-bold text-xl mb-3">By Rail</h3>
                  <p className="text-muted-foreground">
                    Well-connected railway network provides comfortable and scenic routes. 
                    Book in advance for better prices and seat availability, 
                    especially during peak travel seasons.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif font-bold text-xl mb-3">By Road</h3>
                  <p className="text-muted-foreground">
                    Excellent road connectivity with regular bus services and rental car options. 
                    The journey offers beautiful landscapes and the flexibility to stop 
                    at interesting places along the way.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Where to Stay */}
            <section id="stay" className="card">
              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Where to Stay</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Budget</h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Hostels and guesthouses</li>
                      <li>• Budget hotels</li>
                      <li>• Homestays</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Mid-range</h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• 3-star hotels</li>
                      <li>• Business hotels</li>
                      <li>• Serviced apartments</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Luxury</h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• 5-star resorts</li>
                      <li>• Boutique hotels</li>
                      <li>• Heritage properties</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
                  <strong>Disclaimer:</strong> Accommodation listings are for reference only. 
                  Prices and availability may vary.
                </p>
              </div>
            </section>

            {/* Eat & Drink */}
            <section id="eat-drink" className="card">
              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Eat & Drink</h2>
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-lg">Must-Try Local Dishes</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <strong>Local Specialty 1</strong> - Traditional dish with authentic flavors
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <strong>Local Specialty 2</strong> - Street food favorite among locals
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <strong>Local Specialty 3</strong> - Sweet treat perfect for dessert
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <strong>Local Specialty 4</strong> - Refreshing drink for hot days
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <strong>Local Specialty 5</strong> - Hearty meal for dinner
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Practical Tips */}
            <section id="tips" className="card">
              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Practical Tips</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Safety</h3>
                    <p className="text-muted-foreground text-sm">
                      Generally safe for tourists. Keep valuables secure and be aware of your surroundings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Local Customs</h3>
                    <p className="text-muted-foreground text-sm">
                      Respect local traditions and dress modestly when visiting religious sites.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Money</h3>
                    <p className="text-muted-foreground text-sm">
                      Cash is widely accepted. ATMs are readily available in urban areas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Connectivity</h3>
                    <p className="text-muted-foreground text-sm">
                      Good mobile network coverage. Free Wi-Fi available in most hotels and cafes.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-muted-foreground mb-6">
              Start planning your trip to {destination.name} today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/destinations" className="btn-primary">
                Back to Destinations
              </Link>
              <Link to="/articles" className="btn-ghost">
                Read Travel Articles
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default DestinationDetail;