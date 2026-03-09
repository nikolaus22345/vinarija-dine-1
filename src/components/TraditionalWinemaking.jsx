import React from 'react';

const TraditionalWinemaking = () => {
    return (
        <section className="section-padding">
            <div className="container winemaking-grid">
                <div className="winemaker-left text-center">
                    <div className="section-subtitle">Otok Korčula</div>
                    <h2 className="section-title">TRADICIONALNO VINARSTVO</h2>
                    <div className="signature" style={{ fontFamily: 'Great Vibes, cursive', marginTop: '10px', fontSize: '2.5rem' }}>
                        Sardelić
                    </div>
                </div>
                <div className="winemaker-right">
                    <p>
                        Naši vinogradi zasađeni su u okolici Blata na otoku Korčuli, gdje idealna mediteranska klima i specifično tlo stvaraju preduvjete za vrhunska vina. Kroz naš Vinski podrum želimo prenijeti ono najbolje što priroda nudi, pažljivo njegujući svaku kap. Vinogradarstvo za nas nije samo posao, već strast i cjeloživotno učenje koje prenosimo s koljena na koljeno, od uzgoja prve loze pa sve do uživanja u čaši.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TraditionalWinemaking;
