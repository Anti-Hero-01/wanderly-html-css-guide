const Contact = () => {
  return (
    <div className="py-8">
      <div className="container max-w-4xl">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Have questions about a destination? Need travel advice? Want to collaborate with us? 
            We'd love to hear from you and help make your travel dreams a reality.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6" action="#" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Choose a topic</option>
                  <option value="travel-advice">Travel Advice</option>
                  <option value="destination-question">Destination Question</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="feedback">Feedback</option>
                  <option value="technical-issue">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  I'd like to receive travel tips and destination updates via email
                </label>
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      For general inquiries and travel questions
                    </p>
                    <a href="mailto:hello@wanderly.com" className="text-primary hover:text-primary-dark transition-colors">
                      hello@wanderly.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Travel Street<br />
                      Wanderlust City, WL 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">Response Time</h3>
                    <p className="text-muted-foreground">
                      We typically respond within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    How do you choose destinations to feature?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Our team of travel experts carefully selects destinations based on cultural significance, 
                    accessibility, safety, and unique experiences they offer to travelers.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Can I suggest a destination for you to cover?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We love hearing from our community. Send us your destination suggestions 
                    and we'll consider them for future guides.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Do you offer personalized travel planning?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    While we don't offer one-on-one travel planning services, our comprehensive guides 
                    and articles provide detailed information to help you plan your trips independently.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    How can I contribute content to Wanderly?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We're always looking for passionate travelers to share their experiences. 
                    Contact us with your writing samples and travel expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://twitter.com/wanderly" 
                  className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/wanderly" 
                  className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8-.567-1.069-.449-2.4.298-3.346L12.017 4.2l6.286 7.644c.747.946.865 2.277.298 3.346-.568 1.07-1.719 1.8-3.016 1.8H8.449z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/wanderly" 
                  className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;