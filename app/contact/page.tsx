export default function Contact() {
    return (
        <div className="animate-fade-in">
            <section style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '7rem 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.25rem', fontFamily: 'Outfit', fontWeight: 800 }}>Contact Us</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>We&apos;re here to help you with your travel and motor insurance needs.</p>
                </div>
            </section>

            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', background: 'white', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', padding: '4rem', borderRadius: '1.5rem' }}>
                        {/* Contact Info */}
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: 'var(--primary)' }}>Get In Touch</h2>
                            <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                Have questions about a booking or need an instant third-party motor insurance quote? Reach out to us directly through any of the following channels.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div className="service-icon" style={{ margin: 0, width: '50px', height: '50px', fontSize: '1.25rem', borderRadius: '12px' }}><i className="fas fa-phone"></i></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Phone Number</h4>
                                        <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>+91 91053 52519</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div className="service-icon" style={{ margin: 0, width: '50px', height: '50px', fontSize: '1.25rem', borderRadius: '12px' }}><i className="fas fa-envelope"></i></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Email Address</h4>
                                        <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>parvatitradingco@yahoo.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div className="service-icon" style={{ margin: 0, width: '50px', height: '50px', fontSize: '1.25rem', borderRadius: '12px' }}><i className="fas fa-map-marker-alt"></i></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Office Address</h4>
                                        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>Sardar Patel Marg, Khalasi Line,<br />Opp ITC Main Gate, Saharanpur, UP 247001</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div className="service-icon" style={{ margin: 0, width: '50px', height: '50px', fontSize: '1.25rem', borderRadius: '12px' }}><i className="fas fa-clock"></i></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Business Hours</h4>
                                        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                                <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>Follow Us</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="#" className="service-icon" aria-label="Facebook" style={{ width: '45px', height: '45px', fontSize: '1.1rem', margin: 0 }}><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="service-icon" aria-label="Instagram" style={{ width: '45px', height: '45px', fontSize: '1.1rem', margin: 0 }}><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="service-icon" aria-label="WhatsApp" style={{ width: '45px', height: '45px', fontSize: '1.1rem', margin: 0 }}><i className="fab fa-whatsapp"></i></a>
                                    <a href="#" className="service-icon" aria-label="LinkedIn" style={{ width: '45px', height: '45px', fontSize: '1.1rem', margin: 0 }}><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form / Map */}
                        <div>
                            <div style={{
                                width: '100%',
                                height: '450px',
                                borderRadius: 'var(--radius)',
                                overflow: 'hidden',
                                border: '4px solid #f8fafc',
                                boxShadow: 'var(--shadow-md)',
                                marginBottom: '2.5rem'
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6535238771685!2d77.53340847603118!3d29.96064312253544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeaeb9f12343f%3A0x4b0a3cbd0ffe7e39!2sKhalasi%20Line%20Rd%2C%20Tobacco%20Factory%20Colony%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001!5e0!3m2!1sen!2sin!4v1772199314112!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Office Location"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '1.05rem' }}>Want an instant response? Chat with us directly.</p>
                                <a href="https://wa.me/919105352519" className="btn btn-whatsapp" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', borderRadius: '1rem' }}>
                                    <i className="fab fa-whatsapp" style={{ fontSize: '1.25rem' }}></i> Chat with us on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
