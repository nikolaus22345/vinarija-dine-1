import React from 'react';

const WineShowcases = () => {
    return (
        <section id="portfolio" className="section-padding wine-showcases-detailed">
            <div className="container">
                {/* White Wines */}
                <div className="wine-detailed-row">
                    <div className="wine-detailed-content">
                        <div className="wine-detailed-year italic-serif">2015</div>
                        <h2 className="wine-detailed-title">BIJELA VINA</h2>
                        <p className="wine-detailed-desc">
                            Naša bijela vina, predvođena vrhunskom Graševinom, odišu svježinom i mineralnošću Požeške kotline. Svaka kapljica nosi miris cvjetnih livada i sunčanih obronaka Papuka, pažljivo čuvana u našim podrumima dok ne dosegne savršenstvo. Idealna za lagane ljetne večeri i probrana jela od ribe.
                        </p>
                        <button className="btn-outline btn-dark-small">POGLEDAJ VIŠE</button>
                    </div>
                    <div className="wine-detailed-image">
                        <img src="/white-wine-bottle.png" alt="White Wine Bottle" />
                    </div>
                </div>

                {/* Red Wines */}
                <div className="wine-detailed-row reverse">
                    <div className="wine-detailed-image">
                        <img src="https://pngimg.com/uploads/bottle/bottle_PNG2091.png" alt="Red Wine Bottle" />
                    </div>
                    <div className="wine-detailed-content">
                        <div className="wine-detailed-year italic-serif">2012</div>
                        <h2 className="wine-detailed-title">CRNA VINA</h2>
                        <p className="wine-detailed-desc">
                            Robusna, bogata i odležana. Naša crna vina poput Cabernet Sauvignona i Merlota crpe snagu iz dubokog slavonskog tla. Dugotrajno sazrijevanje u hrastovim bačvama daje im prepoznatljive note vanilije, duhana i tamnog šumskog voća. Vino koje traži vrijeme i uživanje u svakom gutljaju.
                        </p>
                        <button className="btn-outline btn-dark-small">POGLEDAJ VIŠE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WineShowcases;
