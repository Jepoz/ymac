import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>DeepStyle</h3>
            <p className={styles.footerText}>
              Soluciones innovadoras con diseño inspirado en DeepSeek.
            </p>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Enlaces</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Contacto</h3>
            <ul className={styles.footerContact}>
              <li>📧 info@deepstyle.com</li>
              <li>📞 +123 456 789</li>
              <li>📍 Ciudad, País</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} DeepStyle. Todos los derechos reservados.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;