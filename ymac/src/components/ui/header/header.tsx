import { useState, useContext  } from 'react';
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
    {/* Imagen centrada en móvil */}
    <div className={styles.mobileLogo}>
      <img src="images/brand/brand-simple.png" alt="Brand" />
    </div>

    {/* Menú hamburguesa */}
    <button className={styles.menuToggle} onClick={toggleMenu}>
      {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>

    <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
      <ul className={styles.navList}>
        <li
          className={classNames({ [styles.active]: activeSection === 'home' })}
          onClick={() => scrollToSection(homeSectionRef)}
        >
          Home
        </li>
        <li
          className={classNames({ [styles.active]: activeSection === 'about' })}
          onClick={() => scrollToSection(aboutUsSectionRef)}
        >
          Sobre nosotros
        </li>

        {/* Imagen solo escritorio */}
        <li className={styles.desktopLogo}>
          <img className={styles.brand} src="images/brand/brand-simple.png" alt="Brand" />
        </li>

        <li
          className={classNames({ [styles.active]: activeSection === 'products' })}
          onClick={() => scrollToSection(productsSectionRef)}
        >
          Productos
        </li>
        <li
          className={classNames({ [styles.active]: activeSection === 'contact' })}
          onClick={() => scrollToSection(contactSectionRef)}
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
