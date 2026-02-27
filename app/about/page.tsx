export default function About() {
    return (
        <div className="animate-fade-in">
            {/* Header */}
            <section style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '7rem 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.25rem', fontFamily: 'Outfit', fontWeight: 800 }}>About Us</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Your reliable partner in travel and motor insurance compliance.</p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>WHO WE ARE</span>
                            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '1rem 0 1.5rem', fontFamily: 'Outfit' }}>Our Mission & Vision</h2>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                Founded with a vision to simplify travel and compliance for everyone, <strong>ptctravels.in</strong> has grown from a local agency to a trusted name across the nation.
                            </p>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                We believe that every journey should be hassle-free. Whether it&apos;s securing the perfect flight, booking a reliable cab, or instantly processing your mandatory third-party motor insurance, our mission is to provide affordable, transparent, and completely reliable services.
                            </p>
                            <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2.5rem)', marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Outfit' }}>500<span style={{ color: 'var(--secondary)' }}>+</span></div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600, marginTop: '0.25rem' }}>Active Clients</div>
                                </div>
                                <div style={{ width: '1px', background: 'var(--border)' }}></div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Outfit' }}>99<span style={{ color: 'var(--secondary)' }}>%</span></div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600, marginTop: '0.25rem' }}>Success Rate</div>
                                </div>
                                <div style={{ width: '1px', background: 'var(--border)' }}></div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Outfit' }}>10<span style={{ color: 'var(--secondary)' }}>+</span></div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600, marginTop: '0.25rem' }}>Years Exp.</div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            height: '500px',
                            backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '4px solid white'
                        }}>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '1rem', fontFamily: 'Outfit' }}>Why Choose ptctravels.in?</h2>
                        <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>We operate with complete transparency and unmatched digital efficiency.</p>
                    </div>

                    <div className="grid-4" style={{ gap: '2rem' }}>
                        <div className="service-card" style={{ textAlign: 'center', background: '#f8fafc', border: 'none' }}>
                            <div className="service-icon" style={{ margin: '0 auto 1.5rem', color: 'var(--secondary)', background: 'white', border: '1px solid var(--border)' }}><i className="fas fa-hand-holding-heart"></i></div>
                            <h3 style={{ fontSize: '1.25rem' }}>Honest Pricing</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '1rem', lineHeight: 1.6 }}>No hidden charges. We provide the absolute best rates directly to you, every single time.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center', background: '#f8fafc', border: 'none' }}>
                            <div className="service-icon" style={{ margin: '0 auto 1.5rem', color: 'var(--secondary)', background: 'white', border: '1px solid var(--border)' }}><i className="fas fa-bolt"></i></div>
                            <h3 style={{ fontSize: '1.25rem' }}>Instant Processing</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '1rem', lineHeight: 1.6 }}>From tatkal tickets to 2-minute motor insurance policy generation, we move fast.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center', background: '#f8fafc', border: 'none' }}>
                            <div className="service-icon" style={{ margin: '0 auto 1.5rem', color: 'var(--secondary)', background: 'white', border: '1px solid var(--border)' }}><i className="fas fa-shield-check"></i></div>
                            <h3 style={{ fontSize: '1.25rem' }}>Extreme Reliability</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '1rem', lineHeight: 1.6 }}>With a decade of operational excellence, our success rates in bookings are unmatched.</p>
                        </div>
                        <div className="service-card" style={{ textAlign: 'center', background: '#f8fafc', border: 'none' }}>
                            <div className="service-icon" style={{ margin: '0 auto 1.5rem', color: 'var(--secondary)', background: 'white', border: '1px solid var(--border)' }}><i className="fas fa-headset"></i></div>
                            <h3 style={{ fontSize: '1.25rem' }}>24/7 Support</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '1rem', lineHeight: 1.6 }}>Need urgent rescheduling? Our dedicated team is available around the clock.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Owner Message */}
            <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        borderRadius: '1.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'clamp(2rem, 5vw, 4rem)',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '3px solid rgba(255,255,255,0.3)'
                        }}>
                            <img src="/founder.png" alt="Founder - Parvati Trading Co" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.25rem', color: 'white', fontFamily: 'Outfit' }}>A Professional Commitment</h3>
                            <p style={{ fontSize: '1.2rem', color: '#e2e8f0', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                &ldquo;We are dedicated to providing seamless, transparent, and ultra-reliable travel and insurance solutions. Your trust is our most valuable asset, and we work tirelessly to protect it.&rdquo;
                            </p>
                            <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem', fontWeight: 700 }}>- Founder, Parvati Trading Co</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
