export default function Services() {
    const services = [
        {
            id: "flights",
            title: "Flight Ticket Booking",
            icon: "fas fa-plane-departure",
            description: "We offer seamless booking for both domestic and international flights. Our expert team ensures you get the best prices and routes.",
            features: [
                "Domestic & International flights",
                "Best price guarantee with transparent pricing",
                "Group bookings for corporate or family travel",
                "Assistance with last-minute bookings",
                "24/7 rescheduling and cancellation support"
            ],
            image: "/service_flight.png"
        },
        {
            id: "trains",
            title: "Railway Ticket Booking",
            icon: "fas fa-train",
            description: "Navigating the Indian Railways can be complex. We simplify it for you with expert guidance and prompt IRCTC booking assistance.",
            features: [
                "Confirmed ticket assistance for high-demand routes",
                "Tatkal booking support for urgent travel",
                "Waiting list guidance and probability analysis",
                "Information on premium trains like Vande Bharat/Rajdhani",
                "Easy cancellations and refund tracking"
            ],
            image: "/service_train.png"
        },
        {
            id: "cabs",
            title: "Professional Cab Services",
            icon: "fas fa-car",
            description: "Comfortable and safe road travel with our nationwide network of professional drivers and well-maintained vehicles.",
            features: [
                "Local city travel and sightseeing packages",
                "Outstation round-trips and one-way drops",
                "Reliable airport pickup and drop services",
                "Variety of vehicles from hatchbacks to luxury SUVs",
                "Experienced, verified, and polite drivers"
            ],
            image: "/service_cab.png"
        },
        {
            id: "insurance",
            title: "Motor Insurance (Third-Party)",
            icon: "fas fa-shield-car",
            description: "Stay compliant with the law and protect yourself against liabilities. We specialize in fast, reliable third-party motor insurance generation.",
            features: [
                "Two-wheeler third-party mandatory coverage",
                "Four-wheeler third-party liability insurance",
                "Commercial vehicle third-party policies",
                "Instant online policy generation in 2 minutes",
                "Hassle-free document processing and digital copies"
            ],
            image: "/service_insurance.png"
        }
    ];

    return (
        <div className="animate-fade-in">
            <section style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '7rem 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.25rem', fontFamily: 'Outfit', fontWeight: 800 }}>Premium Services</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Expert travel booking solutions and instant third-party motor insurance under one roof.</p>
                </div>
            </section>

            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            gap: 'clamp(3rem, 5vw, 5rem)',
                            alignItems: 'center',
                            marginBottom: '6rem',
                            flexWrap: 'wrap',
                            background: 'white',
                            padding: '3rem',
                            borderRadius: '1.5rem',
                            boxShadow: 'var(--shadow)',
                            border: '1px solid var(--border)'
                        }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <div className="service-icon" style={{ marginBottom: '1.5rem', width: '80px', height: '80px', fontSize: '2.5rem', color: 'var(--secondary)', background: 'var(--accent-light)', border: '1px solid #fde68a' }}><i className={service.icon}></i></div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--primary)', fontFamily: 'Outfit' }}>{service.title}</h2>
                                <p style={{ fontSize: '1.15rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>{service.description}</p>
                                <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--foreground)', fontWeight: 500, fontSize: '1.05rem' }}>
                                            <i className="fas fa-check-circle" style={{ color: 'var(--success)', marginTop: '4px', fontSize: '1.2rem' }}></i> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href={`/booking?service=${service.id}`} className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.1rem' }}>Get A Quote <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i></a>
                            </div>
                            <div style={{
                                flex: '1',
                                minWidth: '300px',
                                height: '500px',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-lg)',
                                backgroundImage: `url("${service.image}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '4px solid white'
                            }}>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Need a Customized Solution?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>Don&apos;t see exactly what you&apos;re looking for? Contact us directly and our experts will arrange a custom travel or insurance plan for you.</p>
                    <a href="/contact" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '3rem' }}>Talk to an Expert</a>
                </div>
            </section>
        </div>
    );
}
