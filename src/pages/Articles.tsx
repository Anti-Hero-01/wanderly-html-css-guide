import { Link } from 'react-router-dom';

interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

const articles: Article[] = [
  {
    slug: 'budget-travel-guide',
    title: 'Ultimate Budget Travel Guide to India',
    category: 'Planning',
    excerpt: 'Discover how to explore incredible India without breaking the bank. From affordable accommodation to street food gems.',
    author: 'Priya Sharma',
    date: '2024-01-15',
    readTime: '8 min read'
  },
  {
    slug: 'beach-packing-list',
    title: 'Beach Packing List: 20 Essentials You\'ll Actually Use',
    category: 'Planning',
    excerpt: 'Master the art of beach packing with our comprehensive list of must-have items for your tropical getaway.',
    author: 'Mike Johnson',
    date: '2024-01-10',
    readTime: '5 min read'
  },
  {
    slug: 'paris-city-break',
    title: 'How to Plan a 3-Day Paris City Break',
    category: 'Inspiration',
    excerpt: 'Make the most of a short Paris visit with our expertly crafted itinerary covering must-see attractions and hidden gems.',
    author: 'Sophie Martin',
    date: '2024-01-08',
    readTime: '12 min read'
  },
  {
    slug: 'solo-travel-guide',
    title: 'Solo Travel Safety: Your Complete Guide',
    category: 'Planning',
    excerpt: 'Travel confidently on your own with essential safety tips, destination recommendations, and practical advice.',
    author: 'Sarah Chen',
    date: '2024-01-05',
    readTime: '10 min read'
  },
  {
    slug: 'local-food-guide',
    title: 'Street Food Adventures: A Beginner\'s Guide',
    category: 'Food',
    excerpt: 'Navigate the world of street food safely and deliciously with tips for finding the best local eats.',
    author: 'Carlos Rodriguez',
    date: '2024-01-01',
    readTime: '7 min read'
  },
  {
    slug: 'mountain-hiking-essentials',
    title: 'Mountain Hiking Essentials for Beginners',
    category: 'Adventure',
    excerpt: 'Everything you need to know before hitting the trails, from gear selection to safety protocols.',
    author: 'David Wilson',
    date: '2023-12-28',
    readTime: '9 min read'
  },
  {
    slug: 'cultural-etiquette-guide',
    title: 'Cultural Etiquette Around the World',
    category: 'Culture',
    excerpt: 'Avoid cultural faux pas and show respect with our comprehensive guide to global customs and traditions.',
    author: 'Aisha Patel',
    date: '2023-12-25',
    readTime: '11 min read'
  },
  {
    slug: 'travel-photography-tips',
    title: '10 Travel Photography Tips for Better Photos',
    category: 'Inspiration',
    excerpt: 'Capture stunning travel memories with professional techniques that work with any camera, including smartphones.',
    author: 'Mark Thompson',
    date: '2023-12-20',
    readTime: '6 min read'
  },
  {
    slug: 'sustainable-travel',
    title: 'Sustainable Travel: Making a Positive Impact',
    category: 'Planning',
    excerpt: 'Learn how to travel responsibly and minimize your environmental footprint while maximizing positive local impact.',
    author: 'Emma Green',
    date: '2023-12-15',
    readTime: '8 min read'
  }
];

const categories = ['All', 'Planning', 'Inspiration', 'Food', 'Culture', 'Adventure'];

const Articles = () => {
  return (
    <div className="py-8">
      <div className="container">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Travel Articles
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Get inspired and plan better with our collection of travel guides, tips, and stories 
            from experienced travelers and local experts around the world.
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="chip chip-muted hover:bg-primary-light hover:text-primary-dark transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <article className="card mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-primary to-primary-dark"></div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="chip chip-accent">Featured</span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
                {articles[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>By {articles[0].author}</span>
                  <span>•</span>
                  <span>{new Date(articles[0].date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{articles[0].readTime}</span>
                </div>
              </div>
              <Link 
                to={`/articles/${articles[0].slug}`} 
                className="btn-primary self-start"
              >
                Read Article
              </Link>
            </div>
          </div>
        </article>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article key={article.slug} className="card group">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-2xl"></div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="chip chip-muted">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>By {article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <Link 
                    to={`/articles/${article.slug}`}
                    className="text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest travel tips, destination guides, and exclusive content 
              delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Articles;