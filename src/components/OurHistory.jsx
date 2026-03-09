import React from 'react';

const OurHistory = () => {
    const events = [
        { year: 'Tradicija', label: 'početci sadnje', desc: 'Dugogodišnja poljoprivredna tradicija našeg kraja odredila je i naš put. Na obroncima u okolici Blata zasađeni su prvi trsovi.', img: '/h1-workflow-1.png' },
        { year: 'Znanje', label: 'udruživanje i edukacija', desc: 'Kroz suradnju s udrugama vinogradara s područja Korčule (edukacije o rezidbi), neprestano smo usavršavali naše tehnike.', img: '/h1-workflow-2.png' },
        { year: 'Razvoj', label: 'modernizacija podruma', desc: 'S vremenom smo proširili naše kapacitete, ugradili suvremenu opremu, ali pritom zadržali stari vinski duh u podrumu.', img: '/h1-workflow-3.png' },
        { year: 'Danas', label: 'otvoreni za vas', desc: 'Naš Vinski podrum Dine Vinery 1 otvoren je svakodnevno (0-24) uz prethodnu najavu, spremno dočekujući sve ljubitelje dobre kapljice.', img: null },
    ];

    return (
        <section className="section-padding history-section" id="pages">
            <div className="container">
                <h2 className="section-title">NAŠA POVIJEST</h2>
                <div className="timeline">
                    {events.map((evt, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-left">
                                <div className="section-subtitle" style={{ marginBottom: 0, color: 'white' }}>{evt.label}</div>
                                <div className="timeline-year">{evt.year}</div>
                            </div>
                            {evt.img && (
                                <div className="timeline-center">
                                    <img src={evt.img} alt="Povijest Vinarije" />
                                </div>
                            )}
                            <div className="timeline-right">
                                <p>{evt.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurHistory;
