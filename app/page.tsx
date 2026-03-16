export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* Animated Background Slider */}
        <div className="hero-slider">
          <div className="hero-slide slide-1"></div>
          <div className="hero-slide slide-2"></div>
          <div className="hero-slide slide-3"></div>
          <div className="hero-slide slide-4"></div>
        </div>

        {/* Gradient Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 100%)', zIndex: 1 }}></div>

        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px' }}>
            <span style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#60a5fa', padding: '0.5rem 1.25rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 700, marginBottom: '2rem', display: 'inline-block', border: '1px solid rgba(96, 165, 250, 0.3)', backdropFilter: 'blur(10px)' }}>
              🏆 The Recommended Travel Agency in Saharanpur
            </span>
            <h1 style={{ color: 'white', fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Outfit', fontWeight: 800 }}>
              Your Journey, <span style={{ color: 'var(--secondary)', textShadow: '0 0 20px rgba(37, 99, 235, 0.5)' }}>Simplified</span>.
            </h1>
            <p style={{ color: '#e2e8f0', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '3rem', fontWeight: 400, opacity: 0.95, lineHeight: 1.6, maxWidth: '650px' }}>
              Parvati Trading Co is your complete travel and insurance partner. We provide authentic, hassle-free flight and train bookings, the highest-rated taxi service in Saharanpur, and instant motor insurance support.
            </p>

            {/* Quick Search / CTA Bar */}
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-end', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', opacity: 0.9, color: 'var(--primary)' }}>WHAT DO YOU NEED?</label>
                <div style={{ position: 'relative' }}>
                  <i className="fas fa-search" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}></i>
                  <select style={{ width: '100%', padding: '0.9rem 1rem 0.9rem 2.8rem', borderRadius: '0.75rem', border: '1px solid var(--border)', appearance: 'none', background: 'white', color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}>
                    <option>Flight Tickets</option>
                    <option>Railway Tickets</option>
                    <option>Cab Services</option>
                    <option>Motor Insurance (Third-Party)</option>
                  </select>
                </div>
              </div>
              <a href="/booking" className="btn btn-primary" style={{ backgroundColor: 'var(--secondary)', padding: '0.85rem 2.5rem', height: '54px', fontSize: '1.05rem' }}>
                Search Deals <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section style={{ background: '#f8fafc', padding: '2.5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(2rem, 5vw, 5rem)', flexWrap: 'wrap', opacity: 0.8 }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.5rem' }}>5000+</h4>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--muted)' }}>Happy Travellers</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.5rem' }}>10+</h4>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--muted)' }}>Years Experience</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.5rem' }}>24/7</h4>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--muted)' }}>Expert Support</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.5rem' }}>100%</h4>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--muted)' }}>Instant Policy</p>
          </div>
        </div>
      </section>

      {/* Business Description / About Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Who We Are</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginTop: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Your Most Trusted Travel Partner in Saharanpur</h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                At <strong>Parvati Trading Co</strong>, we believe that traveling should be an exciting experience, not a stressful chore. Located in the heart of Saharanpur, UP, we have proudly served as the city's most reliable travel and compliance agency for over a decade.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                Whether you are a solo backpacker looking for urgent flight bookings, a family needing comfortable railway reservations, or a business traveler seeking the <strong>best taxi service in Saharanpur</strong> for local and outstation trips, we handle it all with a personal touch.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Beyond travel, we recognized a major pain point for vehicle owners and expanded to offer lightning-fast, highly reliable <strong>Third-Party Motor Insurance</strong>—keeping you legally compliant within minutes. Experience a perfectly balanced blend of modern digital convenience and traditional, trustworthy customer care with us.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <a href="/about" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '1.05rem' }}>Read Our Full Story</a>
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/hero_city.png" alt="Travel Agency in Saharanpur" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', background: 'rgba(255, 255, 255, 0.95)', padding: '1.5rem', borderRadius: '1rem', backdropFilter: 'blur(10px)' }}>
                <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}><i className="fas fa-quote-left" style={{ color: 'var(--secondary)', marginRight: '0.5rem' }}></i> Our Commitment</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5, fontStyle: 'italic' }}>&ldquo;To provide every single traveller passing through our doors with honest prices, prompt service, and complete peace of mind.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Our Services</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginTop: '1rem', color: 'var(--primary)' }}>Trusted Travel & Insurance Partner</h2>
            <p style={{ color: 'var(--muted)', maxWidth: '650px', margin: '1.5rem auto 0', fontSize: '1.15rem' }}>With over a decade of local experience in Saharanpur, we combine reliable customer support with fast, digital booking solutions for flights, trains, cabs, and insurance.</p>
          </div>

          <div className="grid-4">
            {/* Flight Ticket Booking */}
            <div className="service-card">
              <div className="offer-badge">15% OFF</div>
              <div className="service-icon"><i className="fas fa-plane-up"></i></div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem' }}>Flight Booking</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '60px' }}>Global reach with local prices. Premium seats and exclusive airline discounts available.</p>
              <ul style={{ listStyle: 'none', color: 'var(--primary)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Domestic & International</li>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Best Price Guarantee</li>
              </ul>
              <a href="/booking?service=flight" style={{ marginTop: '1.5rem', display: 'inline-block', fontWeight: 700, color: 'var(--secondary)', fontSize: '0.95rem' }}>Learn More <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}></i></a>
            </div>

            {/* Railway Ticket Booking */}
            <div className="service-card">
              <div className="offer-badge">HOT DEAL</div>
              <div className="service-icon"><i className="fas fa-train-subway"></i></div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem' }}>Railway Booking</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '60px' }}>Expert Tatkal assistance and confirmed ticket probability for every major IRCTC route.</p>
              <ul style={{ listStyle: 'none', color: 'var(--primary)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Confirm Assistance</li>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Tatkal Support</li>
              </ul>
              <a href="/booking?service=train" style={{ marginTop: '1.5rem', display: 'inline-block', fontWeight: 700, color: 'var(--secondary)', fontSize: '0.95rem' }}>Learn More <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}></i></a>
            </div>

            {/* Cab Services */}
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-taxi"></i></div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem' }}>Reliable Taxi Service</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '60px' }}>Looking for the best taxi service in Saharanpur? We offer clean, well-maintained cabs for local city travel, outstation trips, and airport drop-offs.</p>
              <ul style={{ listStyle: 'none', color: 'var(--primary)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Airport Pickups</li>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Verified Drivers</li>
              </ul>
              <a href="/booking?service=cab" style={{ marginTop: '1.5rem', display: 'inline-block', fontWeight: 700, color: 'var(--secondary)', fontSize: '0.95rem' }}>Learn More <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}></i></a>
            </div>

            {/* Motor Insurance */}
            <div className="service-card">
              <div className="offer-badge" style={{ background: '#3b82f6', color: 'white' }}>REQUIRED</div>
              <div className="service-icon"><i className="fas fa-shield-car" style={{ color: 'var(--secondary)' }}></i></div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem' }}>Motor Insurance</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '60px' }}>Stay compliant with fast, reliable Third-Party Motor Insurance for all vehicle types.</p>
              <ul style={{ listStyle: 'none', color: 'var(--primary)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Third-Party Liability</li>
                <li style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><i className="fas fa-circle-check" style={{ color: 'var(--success)' }}></i> Instant Generation</li>
              </ul>
              <a href="/booking?service=insurance" style={{ marginTop: '1.5rem', display: 'inline-block', fontWeight: 700, color: 'var(--secondary)', fontSize: '0.95rem' }}>Learn More <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offers Promo Section */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            <div className="offer-card" style={{ background: 'white', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>LIMITED TIME</span>
              <h3 style={{ marginTop: '0.75rem', fontSize: '1.5rem' }}>Spring Vacation Sale</h3>
              <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>Get flat ₹2000 off on International Flight + Hotel combos for a limited time.</p>
              <div className="promo-code" style={{ padding: '0.75rem 1.5rem', fontSize: '1.1rem', background: 'var(--accent-light)', borderColor: 'var(--accent)', marginTop: '1.5rem' }}>PTC2000</div>
            </div>
            <div className="offer-card" style={{ background: 'white', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>COMPLIANCE</span>
              <h3 style={{ marginTop: '0.75rem', fontSize: '1.5rem' }}>Two-Wheeler Insurance</h3>
              <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>Renew your mandatory third-party bike insurance instantly online in 2 minutes.</p>
              <div className="promo-code" style={{ padding: '0.75rem 1.5rem', fontSize: '1.1rem', background: '#eff6ff', borderColor: 'var(--secondary)', marginTop: '1.5rem', borderStyle: 'solid' }}>RENEW NOW</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Reviews</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', margin: '1rem 0', color: 'var(--primary)' }}>What Our Customers Say</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Real stories from our highly satisfied clients across India.</p>
          </div>

          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { name: "Rahul Sharma", text: "ptctravels.in made my Europe trip booking seamless. Their flight prices were better than any major online portal!", rating: 5 },
              { name: "Priya Patel", text: "Got my third-party car insurance renewed instantly. The process was completely digital and extremely fast. Highly recommended!", rating: 5 },
              { name: "Amit Verma", text: "Their Tatkal booking service is a real lifesaver. I've used them multiple times for train journeys and they never disappoint.", rating: 5 },
              { name: "Sneha Reddy", text: "Reliable airport cab services. The driver arrived 15 mins early, was professional, and the car was immaculate.", rating: 5 }
            ].map((t, i) => (
              <div key={i} className="service-card" style={{ textAlign: 'center', padding: '2rem', border: '1px solid #f1f5f9', background: '#f8fafc' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                  {[...Array(t.rating)].map((_, i) => <i key={i} className="fas fa-star" style={{ margin: '0 2px' }}></i>)}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--foreground)', lineHeight: 1.7, fontSize: '0.95rem' }}>&ldquo;{t.text}&rdquo;</p>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>{t.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Verified Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #1e3a8a 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Ready to Plan Your Next Journey?</h2>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', marginBottom: '3rem', opacity: 0.9, lineHeight: 1.6 }}>Connect directly with Saharanpur's most trusted travel agency for the best travel deals and hassle-free instant motor insurance processing.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/booking" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '3rem' }}>Book Now</a>
            <a href="https://wa.me/919105352519" className="btn btn-whatsapp" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '3rem' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '1.25rem' }}></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Parvati Trading Co",
            "image": "https://ptctravels.in/logo_icon.png",
            "@id": "https://ptctravels.in",
            "url": "https://ptctravels.in",
            "telephone": "+919105352519",
            "email": "parvatitradingco@yahoo.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sardar Patel Marg, Khalasi Line, Opp ITC Main Gate",
              "addressLocality": "Saharanpur",
              "addressRegion": "UP",
              "postalCode": "247001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.9640,
              "longitude": 77.5460
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "20:00"
            },
            "sameAs": [
              "https://ptctravels.in"
            ],
            "priceRange": "₹₹",
            "description": "Best travel agency in Saharanpur offering flight, train, and the best taxi service in Saharanpur along with instant third-party motor insurance.",
            "areaServed": "Saharanpur",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 29.9640,
                "longitude": 77.5460
              },
              "geoRadius": "50000"
            }
          })
        }}
      />
    </>
  );
}
