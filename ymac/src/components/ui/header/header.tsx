import { useState, useContext } from 'react';
import classNames from 'classnames';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './header.module.scss';
import { ScrollContext } from '../../../context/scroll-context';

const Header = () => {
  const scroll = useContext(ScrollContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  if (!scroll) return null;

  const {
    scrollToSection,
    homeSectionRef,
    aboutUsSectionRef,
    productsSectionRef,
    contactSectionRef,
    activeSection,
  } = scroll;

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* ✅ Logo principal arriba del sitio (se mantiene) */}
        <div className={styles.topLogo}>
          <img src="images/brand/brand-simple.png" alt="Brand" />
        </div>

        {/* Botón hamburguesa */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          {/* ✅ Logo dentro del menú, arriba de las opciones */}
          <div className={styles.mobileLogoMenu}>
            <img src="images/brand/brand-simple.png" alt="Brand" />
          </div>

          <ul className={styles.navList}>
            <li
              className={classNames({ [styles.active]: activeSection === 'home' })}
              onClick={() => {
                scrollToSection(homeSectionRef);
                closeMenu();
              }}
            >
              Home
            </li>
            <li
              className={classNames({ [styles.active]: activeSection === 'about' })}
              onClick={() => {
                scrollToSection(aboutUsSectionRef);
                closeMenu();
              }}
            >
              Sobre nosotros
            </li>

            {/* Logo escritorio */}
            <li className={styles.desktopLogo}>
              <img className={styles.brand} src="images/brand/brand-simple.png" alt="Brand" />
            </li>

            <li
              className={classNames({ [styles.active]: activeSection === 'products' })}
              onClick={() => {
                scrollToSection(productsSectionRef);
                closeMenu();
              }}
            >
              Productos
            </li>
            <li
              className={classNames({ [styles.active]: activeSection === 'contact' })}
              onClick={() => {
                scrollToSection(contactSectionRef);
                closeMenu();
              }}
            >
              Contacto
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
