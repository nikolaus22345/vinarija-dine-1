import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header contact-header">
                <div className="overlay"></div>
                <div className="container header-content">
                    <h1 className="hero-title">KONTAKT</h1>
                    <div className="hero-divider">
                        <span></span>
                        <i className="fa-solid fa-location-dot"></i>
                        <span></span>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="section-padding contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">

                        <div className="contact-col">
                            <h4>REZERVACIJE</h4>
                            <p>Telefon: +385 9x xxx xxxx</p>
                        </div>

                        <div className="contact-col">
                            <h4>LOKACIJA</h4>
                            <p>Blato</p>
                            <p>Korčula, Hrvatska</p>
                        </div>

                        <div className="contact-col">
                            <h4>PODRŠKA</h4>
                            <p>Email: info@dine-vinery-1.hr</p>
                            <p>tel: +385 34 xxx xxxx</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-container">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.6710471!2d17.625!3d45.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475da!2sBi%C5%A1kupci%20124B%2C%2034000%2C%20Bi%C5%A1kupci!5e0!3m2!1shr!2shr!4v1620000000000!5m2!1shr!2shr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding">
                <div className="container contact-form-container">
                    <div className="text-center">
                        <div className="section-subtitle">Pošaljite upit</div>
                        <h2 className="section-title">OSTANITE U KONTAKTU</h2>
                        <p className="contact-form-desc">Ispunite obrazac u nastavku i javit ćemo vam se u najkraćem mogućem roku.</p>
                    </div>
                    <form className="contact-form">
                        <div className="contact-form-inputs">
                            <input type="text" placeholder="Ime i prezime" />
                            <input type="email" placeholder="Email adresa" />
                        </div>
                        <input type="text" placeholder="Predmet" />
                        <textarea placeholder="Vaša poruka" rows="6"></textarea>
                        <button type="submit" className="btn-outline btn-dark-small submit-btn">POŠALJI PORUKU</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
