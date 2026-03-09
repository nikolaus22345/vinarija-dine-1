import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header" style={{
                background: "url('https://images.unsplash.com/photo-1504279589104-dbdf13c36a6e?q=80&w=2000&auto=format&fit=crop') center/cover no-repeat",
                padding: "150px 0 100px",
                textAlign: "center",
                position: "relative",
                color: "white"
            }}>
                <div className="overlay" style={{ background: "rgba(0,0,0,0.5)", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></div>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <h1 className="hero-title">O NAMA</h1>
                    <div className="hero-divider">
                        <span></span>
                        <i className="fa-solid fa-wine-glass"></i>
                        <span></span>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section-padding" style={{ backgroundColor: "#fdfbf8" }}>
                <div className="container">
                    <div className="winemaking-grid">
                        <div className="winemaking-image">
                            <img src="https://images.unsplash.com/photo-1474722861605-173884d78f57?q=80&w=1200&auto=format&fit=crop" alt="Vineyard" style={{ filter: "grayscale(20%)" }} />
                        </div>
                        <div className="winemaking-text">
                            <div className="section-subtitle">Naša filozofija</div>
                            <h2 className="section-title">HARMONIJA PRIRODE I TRADICIJE</h2>
                            <p>
                                Dine wines are born in the vineyards of the Sardelić family, near the place Blato on the island of Korčula, where the cellars are also located. In this hilly place, before juices start coursing through the vines, a drop of sweat from all the effort, constant striving and work transforms and becomes a drop of love, happiness and success…
                            </p>
                            <p>
                                And as such arrives to the table in the Dine wines – without any additional transformation or modification. Generally, Dine wines are characterized by simplicity and originality. Each individual variety has been made into a wine which has been carefully controlled on the way from the vine to the bottle, so that the characteristics of the variety are easily recognizable in every wine. Sometimes these wines surprise us with their simplicity, and then convince us that that is exactly how wines should be. Just like every beginning… Just like youth… Bold, direct and daring… Exactly so!
                            </p>
                            <div className="signature">Sardelić</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Values */}
            <section className="section-padding">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-seedling"></i></div>
                            <h3 className="feature-title">EKOLOŠKI PRISTUP</h3>
                            <p className="blog-excerpt">Minimalna intervencija u prirodi za maksimalni okus u čaši.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-barrel"></i></div>
                            <h3 className="feature-title">HRASOVA BAČVA</h3>
                            <p className="blog-excerpt">Tradicionalno dozrijevanje u najboljem kvalitetnom hrastu.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-temperature-arrow-down"></i></div>
                            <h3 className="feature-title">KONTROLIRANA FERMENTACIJA</h3>
                            <p className="blog-excerpt">Spajamo staro znanje s najmodernijom tehnologijom.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-hand-holding-heart"></i></div>
                            <h3 className="feature-title">RUČNA BERBA</h3>
                            <p className="blog-excerpt">Svaki grozd prolazi kroz naše ruke kako bi samo najbolji postao vino.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Like Qode */}
            <section className="image-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", height: "400px" }}>
                <div style={{ background: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000') center/cover" }}></div>
                <div style={{ background: "url('https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1000') center/cover" }}></div>
                <div style={{ background: "url('https://images.unsplash.com/photo-1528823331182-7aa201b1de80?q=80&w=1000') center/cover" }}></div>
            </section>
        </div>
    );
};

export default About;
