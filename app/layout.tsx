import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ptctravels.in'),
  title: "Best Travel Agency & Taxi Service in Saharanpur | Parvati Trading Co",
  description: "Parvati Trading Co is the best travel agency in Saharanpur. We offer reliable flight & train bookings, top-rated taxi service in Saharanpur, and instant motor insurance.",
  keywords: ["best travel agency in saharanpur", "taxi service in saharanpur", "cab service in saharanpur", "flight booking saharanpur", "train booking saharanpur", "motor insurance saharanpur", "Parvati Trading Co", "tour and travels saharanpur"],
  authors: [{ name: "Parvati Trading Co" }],
  openGraph: {
    title: "Best Travel Agency & Taxi Service in Saharanpur | ptctravels.in",
    description: "Book flights, trains, premium cabs, and motor insurance with Saharanpur's most trusted travel agency.",
    url: "https://ptctravels.in",
    siteName: "Parvati Trading Co",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://ptctravels.in",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker-item"><i className="fas fa-percent"></i> Get 15% OFF on first Domestic Flight booking! Code: FIRSTFLY</div>
            <div className="ticker-item"><i className="fas fa-car"></i> Zero cancellation fees on Airport Cab pickups</div>
            <div className="ticker-item"><i className="fas fa-shield-alt"></i> Instant Third-Party Motor Insurance generation</div>
            <div className="ticker-item"><i className="fas fa-percent"></i> Special Group Discounts for Railway bookings (6+ members)</div>
            {/* Duplicate for smooth scroll */}
            <div className="ticker-item"><i className="fas fa-percent"></i> Get 15% OFF on first Domestic Flight booking! Code: FIRSTFLY</div>
            <div className="ticker-item"><i className="fas fa-car"></i> Zero cancellation fees on Airport Cab pickups</div>
          </div>
        </div>

        <nav className="glass main-nav">
          <div className="container nav-container">
            <a href="/" className="logo-link">
              <img src="/logo_icon.png" alt="Parvati Trading Co" className="logo-img" />
              <span className="logo-text">Parvati Trading Co</span>
            </a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/booking" className="btn btn-primary book-btn">Book Now</a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer style={{ background: '#0f172a', color: 'white', padding: '4rem 0 2rem' }}>
          <div className="container">
            <div className="grid-4">
              <div>
                <h3 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Parvati Trading Co</h3>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Your one-stop solution for all travel needs and motor insurance. Trusted by 500+ satisfied customers across India.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: 'white' }} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" style={{ color: 'white' }} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" style={{ color: 'white' }} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" style={{ color: 'white' }} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '0.75rem' }}><a href="/" style={{ color: '#94a3b8' }}>Home</a></li>
                  <li style={{ marginBottom: '0.75rem' }}><a href="/about" style={{ color: '#94a3b8' }}>About Us</a></li>
                  <li style={{ marginBottom: '0.75rem' }}><a href="/contact" style={{ color: '#94a3b8' }}>Contact</a></li>
                  <li style={{ marginBottom: '0.75rem' }}><a href="/booking" style={{ color: '#94a3b8' }}>Book Inquiry</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Our Services</h4>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: '#94a3b8' }}>Flight Booking</a></li>
                  <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: '#94a3b8' }}>Train Booking</a></li>
                  <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: '#94a3b8' }}>Cab Services</a></li>
                  <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: '#94a3b8' }}>Motor Insurance (Third-Party)</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact Info</h4>
                <p style={{ color: '#94a3b8', marginBottom: '0.75rem' }}><i className="fas fa-phone" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i> +91 91053 52519</p>
                <p style={{ color: '#94a3b8', marginBottom: '0.75rem' }}><i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i> parvatitradingco@yahoo.com</p>
                <p style={{ color: '#94a3b8', marginBottom: '0.75rem', lineHeight: '1.4' }}><i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem', color: 'var(--secondary)' }}></i> Sardar Patel Marg, Khalasi Line, Opp ITC Main Gate, Saharanpur, UP</p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #1e293b', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
              <p>&copy; {new Date().getFullYear()} ptctravels.in. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <a href="https://wa.me/919105352519" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </body>
    </html >
  );
}
