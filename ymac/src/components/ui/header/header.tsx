import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* <NavLink to="/" className={styles.logo}>DeepStyle</NavLink> */}

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeMenu}>
                Sobre nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeMenu}>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={closeMenu}>
                Contacto
              </NavLink>
            </li>            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
