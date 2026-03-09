import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">DINE VINERY 1</h1>
                <div className="hero-divider">
                    <span></span>
                    <i className="fa-solid fa-wine-bottle"></i>
                    <span></span>
                </div>
                <p className="hero-text">
                    Otkrijte istinsku kvalitetu vina iz srca Zlatne doline. Posvećenost tradiciji i ljubavi prema vinogradarstvu u Biškupcima.
                </p>
                <div className="hero-btns">
                    <button className="btn-outline">NAŠA VINA</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
