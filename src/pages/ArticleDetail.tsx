import { useParams, Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample article data - in a real app this would come from an API or database
  const article = {
    title: 'Ultimate Budget Travel Guide to India',
    author: 'Priya Sharma',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Planning',
    content: `
      <p>India is a traveler's paradise that doesn't have to break the bank. With careful planning and local knowledge, you can experience this incredible country on any budget. This comprehensive guide will show you exactly how to travel India affordably while still having amazing experiences.</p>
      
      <h2>Budget Breakdown</h2>
      <p>The key to budget travel in India is understanding where your money goes. Here's a realistic daily budget breakdown for backpackers:</p>
      
      <ul>
        <li><strong>Accommodation:</strong> ₹300-800 ($4-10) - Hostels, guesthouses, budget hotels</li>
        <li><strong>Food:</strong> ₹200-500 ($2.50-6) - Street food, local restaurants, thalis</li>
        <li><strong>Transport:</strong> ₹100-400 ($1.25-5) - Local buses, trains, rickshaws</li>
        <li><strong>Activities:</strong> ₹100-300 ($1.25-4) - Temple visits, markets, free attractions</li>
      </ul>
      
      <p>This puts your total daily budget at around ₹700-2000 ($9-25), making India one of the most affordable travel destinations in the world.</p>
      
      <h2>Accommodation Tips</h2>
      <p>Finding affordable places to stay in India is easier than you might think. Here are the best options for budget travelers:</p>
      
      <p><strong>Hostels and Guesthouses:</strong> Available in most tourist areas, these offer basic but clean accommodation. Look for places with good reviews on booking platforms, and don't hesitate to negotiate prices for longer stays.</p>
      
      <p><strong>Homestays:</strong> Stay with local families for an authentic experience. These are often cheaper than hotels and include meals. Use platforms like Airbnb or local homestay networks.</p>
      
      <p><strong>Budget Hotels:</strong> Family-run hotels often offer the best value. Look for places slightly away from main tourist areas for better prices.</p>
      
      <h2>Food on a Budget</h2>
      <p>Indian street food is not only delicious but incredibly affordable. Here's how to eat well without spending much:</p>
      
      <p><strong>Street Food:</strong> Samosas, chaat, dosas, and vada pav cost just ₹10-50 each. Look for busy stalls with high turnover for the freshest food.</p>
      
      <p><strong>Thali Meals:</strong> Complete meals with rice, dal, vegetables, and bread for ₹80-150. These offer great value and variety.</p>
      
      <p><strong>Local Restaurants:</strong> Avoid touristy areas and eat where locals eat. You'll save money and get more authentic flavors.</p>
    `
  };

  const relatedArticles = [
    {
      slug: 'solo-travel-guide',
      title: 'Solo Travel Safety: Your Complete Guide',
      category: 'Planning'
    },
    {
      slug: 'local-food-guide', 
      title: 'Street Food Adventures: A Beginner\'s Guide',
      category: 'Food'
    },
    {
      slug: 'cultural-etiquette-guide',
      title: 'Cultural Etiquette Around the World',
      category: 'Culture'
    }
  ];

  return (
    <article className="py-8">
      <div className="container max-w-4xl">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Link 
              to="/articles"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="chip chip-primary">
              {article.category}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-medium text-sm">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="font-medium">{article.author}</span>
            </div>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="aspect-[16/9] bg-gradient-to-br from-primary to-primary-dark rounded-2xl mb-12 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl font-serif font-bold">Article Image Placeholder</h2>
            <p className="text-white/80 mt-2">Hero image would appear here</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="space-y-6 text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Pull Quote */}
          <blockquote className="my-12 p-8 bg-slate-50 rounded-2xl border-l-4 border-primary">
            <p className="text-xl font-serif italic text-foreground mb-4">
              "The key to budget travel in India is understanding where your money goes and making smart choices that maximize your experiences while minimizing costs."
            </p>
            <cite className="text-muted-foreground">— {article.author}</cite>
          </blockquote>

          {/* Additional Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Transportation Hacks</h2>
            <p>Getting around India efficiently and cheaply requires some insider knowledge:</p>
            
            <p><strong>Train Travel:</strong> Book in advance through the IRCTC website or app. Choose sleeper class for overnight journeys - it's comfortable and affordable. Consider the Tatkal booking option for last-minute travel.</p>
            
            <p><strong>Bus Networks:</strong> Government buses are the cheapest option for shorter distances. Private bus operators offer more comfort for slightly higher prices. Book through platforms like RedBus for convenience.</p>
            
            <p><strong>Local Transport:</strong> Use auto-rickshaws and cycle-rickshaws for short distances. Always negotiate the fare beforehand or insist on using the meter in cities where it's available.</p>

            {/* Inline Image */}
            <figure className="my-8">
              <div className="aspect-[16/9] bg-accent rounded-2xl flex items-center justify-center">
                <div className="text-center text-accent-foreground">
                  <p className="font-medium">Inline Image Placeholder</p>
                  <p className="text-sm opacity-75">Train station or street scene</p>
                </div>
              </div>
              <figcaption className="text-center text-muted-foreground text-sm mt-3">
                Busy Indian train station during peak travel season
              </figcaption>
            </figure>

            <h2 className="font-serif text-3xl font-bold">Money-Saving Tips</h2>
            <ol className="space-y-3">
              <li><strong>Negotiate everything:</strong> From accommodation to rickshaw rides, negotiation is expected and can save you significant money.</li>
              <li><strong>Travel during off-season:</strong> Avoid peak tourist months for better prices on accommodation and transport.</li>
              <li><strong>Stay longer in one place:</strong> Weekly or monthly rates for accommodation are much cheaper than daily rates.</li>
              <li><strong>Use local SIM cards:</strong> Buy a local SIM card for cheap data and calls instead of expensive roaming charges.</li>
              <li><strong>Cook occasionally:</strong> If staying in places with kitchen access, cooking some meals can significantly reduce food costs.</li>
            </ol>

            <h2 className="font-serif text-3xl font-bold">Final Thoughts</h2>
            <p>Budget travel in India is not just about spending less money - it's about connecting more authentically with the country and its people. By choosing local transportation, eating where locals eat, and staying in family-run accommodations, you'll have richer experiences while keeping costs low.</p>
            
            <p>Remember that the goal isn't to spend as little as possible, but to spend wisely on experiences that matter most to you. With these tips, you can explore incredible India on any budget while creating memories that will last a lifetime.</p>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="border-t border-border pt-8 mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">Share this article:</span>
              <button className="text-primary hover:text-primary-dark transition-colors">
                Twitter
              </button>
              <button className="text-primary hover:text-primary-dark transition-colors">
                Facebook
              </button>
              <button className="text-primary hover:text-primary-dark transition-colors">
                LinkedIn
              </button>
            </div>
            <Link to="/articles" className="btn-ghost">
              Back to Articles
            </Link>
          </div>
        </footer>

        {/* Related Articles */}
        <section>
          <h2 className="font-serif text-3xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <article key={relatedArticle.slug} className="card group">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-2xl"></div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="chip chip-muted">
                      {relatedArticle.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-4 group-hover:text-primary transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <Link 
                    to={`/articles/${relatedArticle.slug}`}
                    className="text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default ArticleDetail;