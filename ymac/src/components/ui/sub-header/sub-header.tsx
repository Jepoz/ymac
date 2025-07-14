
import styles from './sub-header.module.scss';

const SubHeader = () => {


  return (
    <div className={styles['sub-header']}>
        <p className={`${styles['sub-header-text']} font-text-light`}>Envios a CDMX y Área Metropolitana disponible</p>
    </div>
  );
};

export default SubHeader;
