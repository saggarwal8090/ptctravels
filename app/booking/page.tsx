"use client";

export default function Booking() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');

        const text = `*New Enquiry from Parvati Trading Co*
*Name:* ${name}
*Phone:* ${phone}
*Service:* ${service}
*Message:* ${message || 'N/A'}`;

        window.open(`https://wa.me/919105352519?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="animate-fade-in">
            <section style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '7rem 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.25rem', fontFamily: 'Outfit', fontWeight: 800 }}>Digital Enquiry</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Fill out the form below and our agents will connect with you via WhatsApp or Email instantly.</p>
                </div>
            </section>

            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div style={{
                        background: 'white',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        borderRadius: '1.5rem',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid var(--border)'
                    }}>
                        <form onSubmit={handleSubmit}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontFamily: 'Outfit', color: 'var(--primary)', borderBottom: '2px solid #f1f5f9', paddingBottom: '1rem' }}>Your Details</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>Full Name <span style={{ color: 'var(--accent)' }}>*</span></label>
                                    <input type="text" name="name" placeholder="John Doe" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        border: '1px solid var(--border)',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        background: '#f8fafc'
                                    }} required />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>Phone Number (WhatsApp) <span style={{ color: 'var(--accent)' }}>*</span></label>
                                    <input type="tel" name="phone" placeholder="+91 91053 52519" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        border: '1px solid var(--border)',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        background: '#f8fafc'
                                    }} required />
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>Service Required <span style={{ color: 'var(--accent)' }}>*</span></label>
                                    <select name="service" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        border: '1px solid var(--border)',
                                        outline: 'none',
                                        background: '#f8fafc',
                                        fontSize: '1rem',
                                        color: 'var(--foreground)'
                                    }}>
                                        <option>Flight Ticket Booking</option>
                                        <option>Railway Ticket Booking</option>
                                        <option>Cab Services</option>
                                        <option>Motor Insurance (Third-Party Only)</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>Additional Message</label>
                                <textarea name="message" rows={4} placeholder="Please provide any extra remarks or registration number details here..." style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    border: '1px solid var(--border)',
                                    outline: 'none',
                                    resize: 'vertical',
                                    fontSize: '1rem',
                                    background: '#f8fafc'
                                }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', borderRadius: '0.75rem' }}>
                                Submit Request Securely
                            </button>
                            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                                <i className="fas fa-lock" style={{ marginRight: '0.5rem' }}></i> Your data is 100% secure. We do not spam.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="section-padding" style={{ background: 'white', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                        <div>
                            <div style={{ width: '70px', height: '70px', background: 'var(--accent-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                <i className="fas fa-file-shield" style={{ fontSize: '1.75rem', color: 'var(--accent)' }}></i>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Govt Compliant</h4>
                            <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>IRDAI authorized third-party policy issues.</p>
                        </div>
                        <div>
                            <div style={{ width: '70px', height: '70px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                <i className="fas fa-bolt" style={{ fontSize: '1.75rem', color: 'var(--secondary)' }}></i>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Instant Confirmation</h4>
                            <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>Policies & Tickets generated within minutes.</p>
                        </div>
                        <div>
                            <div style={{ width: '70px', height: '70px', background: '#ecfdf5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                <i className="fas fa-user-shield" style={{ fontSize: '1.75rem', color: 'var(--success)' }}></i>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>100% Reliable</h4>
                            <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>Verified partners with a decade of trust.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
