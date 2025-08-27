import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-8">
      <div className="container max-w-4xl">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Wanderly
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            We believe that travel should be accessible, inspiring, and transformative. 
            Our mission is to help you discover the world's most incredible destinations 
            while creating meaningful connections with local cultures.
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Wanderly, we're passionate about making travel planning easier and more inspiring. 
                Our team of experienced travelers and local experts curate authentic destination guides, 
                practical tips, and insider knowledge to help you create unforgettable journeys.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that responsible travel has the power to connect cultures, support local communities, 
                and create positive change in the world. Every guide we create is designed to help you travel 
                more thoughtfully and meaningfully.
              </p>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-serif font-bold">Our Story</h3>
                <p className="text-white/80 mt-2">Founded by travelers, for travelers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Expert Curation</h3>
              <p className="text-muted-foreground">
                Every destination and tip is carefully researched and tested by our team of travel experts 
                and local contributors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Authentic Experiences</h3>
              <p className="text-muted-foreground">
                We focus on genuine cultural experiences and hidden gems that help you connect 
                with destinations beyond the tourist trail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Responsible Travel</h3>
              <p className="text-muted-foreground">
                We promote sustainable tourism practices that benefit local communities 
                and preserve destinations for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary-foreground text-2xl font-bold">PK</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Priya Kumar</h3>
              <p className="text-primary font-medium mb-3">Founder & Travel Expert</p>
              <p className="text-muted-foreground text-sm">
                Former travel journalist with 15+ years exploring Asia. Passionate about 
                sustainable tourism and cultural immersion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-accent-foreground text-2xl font-bold">MS</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Marco Silva</h3>
              <p className="text-primary font-medium mb-3">Content Director</p>
              <p className="text-muted-foreground text-sm">
                Adventure photographer and writer specializing in European destinations 
                and outdoor activities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary-foreground text-2xl font-bold">AL</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Aisha Lee</h3>
              <p className="text-primary font-medium mb-3">Community Manager</p>
              <p className="text-muted-foreground text-sm">
                Digital nomad and culture enthusiast who helps travelers connect 
                and share their experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Destinations Covered</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Travel Guides</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Happy Travelers</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Start Your Journey</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Ready to explore the world with confidence? Browse our destination guides, 
              read travel tips from experts, and join our community of adventurous travelers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/destinations" className="btn-secondary">
                Explore Destinations
              </Link>
              <Link to="/articles" className="btn-ghost text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Read Our Guides
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;