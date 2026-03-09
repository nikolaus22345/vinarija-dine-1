import React from 'react';

const FeaturesGrid = () => {
    const features = [
        { icon: 'fa-regular fa-sun', title: 'SUNČANA REGIJA', subtitle: 'Zlatna dolina' },
        { icon: 'fa-regular fa-star', title: 'KVALITETA', subtitle: 'Slavonska vina' },
        { icon: 'fa-regular fa-heart', title: 'LJUBAV', subtitle: 'U svakoj kapi' },
        { icon: 'fa-brands fa-envira', title: 'PRIRODA', subtitle: 'Prirodna metoda' },
    ];

    return (
        <section className="section-padding">
            <div className="container features-container">
                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="feature-item text-center">
                            <i className={`feature-icon ${f.icon}`}></i>
                            <h4 className="feature-title">{f.title}</h4>
                            <p className="section-subtitle" style={{ marginBottom: 0 }}>{f.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
