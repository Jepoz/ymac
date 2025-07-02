
import styles from './sub-header.module.scss';

const SubHeader = () => {


  return (
    <div className={styles['sub-header']}>
        <p className={styles['sub-header-text']}>Envios CDMX y Área Metropolitana disponible</p>
    </div>
  );
};

export default SubHeader;
