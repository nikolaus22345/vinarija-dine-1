import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReservationModal from './ReservationModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const openModal = () => {
    setModalOpen(true);
    closeMenu();
  };
  const closeModal = () => setModalOpen(false);

  const handleNavClick = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className="desktop-nav-center">
          <ul className="nav-links">
            <li><Link to="/">POČETNA</Link></li>
            <li><Link to="/about">O NAMA</Link></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>VINA</a></li>
            <li><a href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }}>NOVOSTI</a></li>
            <li><Link to="/contact">KONTAKT</Link></li>
          </ul>
        </nav>

        <div className="header-right">
          <button className="btn-outline reservation-btn" onClick={openModal}>
            REZERVIRAJTE
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={closeMenu}>POČETNA</Link></li>
            <li><Link to="/about" onClick={closeMenu}>O NAMA</Link></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>VINA</a></li>
            <li><a href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }}>NOVOSTI</a></li>
            <li><Link to="/contact" onClick={closeMenu}>KONTAKT</Link></li>
          </ul>
        </div>
      </header>

      {modalOpen && <ReservationModal onClose={closeModal} />}
    </>
  );
};

export default Header;
