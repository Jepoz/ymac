import { useState, useContext  } from 'react';
import { NavLink } from 'react-router-dom';
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
        {/* <NavLink to="/" className={styles.logo}>DeepStyle</NavLink> */}

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={activeSection === 'home' ? styles.active : ''}
                onClick={() => scrollToSection(homeSectionRef)}>              
              Home              
            </li>
            <li className={activeSection === 'about' ? styles.active : ''}
                onClick={() => scrollToSection(aboutUsSectionRef)}>              
               Sobre nosotros              
            </li>
            <li className={activeSection === 'products' ? styles.active : ''}
                onClick={() => scrollToSection(productsSectionRef)}>              
              Productos              
            </li>
            <li className={activeSection === 'contact' ? styles.active : ''}
                onClick={() => scrollToSection(contactSectionRef)}>              
              Contacto              
            </li>            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
