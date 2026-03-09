import React from 'react';

const Counters = () => {
    const stats = [
        { icon: 'fa-sun', value: '2568', label: 'sunny hours' },
        { icon: 'fa-star', value: '37', label: 'awards won' },
        { icon: 'fa-heart', value: '157', label: 'wine types' },
        { icon: 'fa-leaf', value: '2167', label: 'happy customers' }
    ];

    return (
        <section className="section-padding counters-section">
            <div className="container">
                <div className="counters-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="counter-item">
                            <div className="counter-icon">
                                <i className={`fa-regular ${stat.icon}`}></i>
                            </div>
                            <div className="counter-value">{stat.value}</div>
                            <div className="counter-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counters;
