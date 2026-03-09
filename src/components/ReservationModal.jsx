import React from 'react';

const ReservationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        alert('Vaša rezervacija je poslana! Kontaktirat ćemo Vas uskoro.');
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>REZERVIRAJTE POSJET</h2>
                <p style={{ marginBottom: '30px', color: '#666' }}>Ispunite podatke i rezervirajte termin za kušanje vina.</p>

                <form onSubmit={handleSubmit} className="reservation-form">
                    <div className="form-group">
                        <label>Ime i Prezime</label>
                        <input type="text" required placeholder="npr. Marko Marković" />
                    </div>
                    <div className="form-group">
                        <label>Email adresa</label>
                        <input type="email" required placeholder="vas@email.com" />
                    </div>
                    <div className="form-group">
                        <label>Broj telefona</label>
                        <input type="tel" required placeholder="09x xxx xxxx" />
                    </div>
                    <div className="form-group">
                        <label>Poruka / Posebni zahtjevi (opcionalno)</label>
                        <textarea rows="4" placeholder="Željeni datum, broj osoba..."></textarea>
                    </div>
                    <button type="submit" className="btn-outline btn-dark" style={{ width: '100%', marginTop: '10px' }}>
                        POŠALJI ZAHTJEV
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReservationModal;
