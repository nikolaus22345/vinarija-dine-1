import React, { useState } from 'react';
import ReservationModal from './ReservationModal';

const OurStory = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="section-padding story-section">
            <div className="container">
                <div className="story-map">
                    <img src="/croatia_map_v2.png" alt="Croatia Map" />
                </div>
                <div className="section-subtitle">Putovanje kroz vrijeme i prostor</div>
                <h2 className="section-title">NAŠA PRIČA</h2>
                <p style={{ marginBottom: '40px' }}>
                    Dine wines are born in the vineyards of the Sardelić family, near the place Blato on the island of Korčula, where the cellars are also located. In this hilly place, before juices start coursing through the vines, a drop of sweat from all the effort, constant striving and work transforms and becomes a drop of love, happiness and success… And as such arrives to the table in the Dine wines – without any additional transformation or modification. Generally, Dine wines are characterized by simplicity and originality. Each individual variety has been made into a wine which has been carefully controlled on the way from the vine to the bottle, so that the characteristics of the variety are easily recognizable in every wine, at the same time acknowledging the outside factors that determine the conditions of this path and of the end product – the wine. Sometimes these wines surprise us with their simplicity, and then convince us that that is exactly how wines should be. Just like every beginning… Just like youth… Bold, direct and daring… Exactly so!
                </p>
                <button
                    className="btn-outline btn-dark"
                    style={{ color: 'var(--text-dark)', borderColor: 'var(--text-dark)' }}
                    onClick={() => setModalOpen(true)}
                >
                    KONTAKTIRAJTE NAS
                </button>
            </div>
            <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
};

export default OurStory;
