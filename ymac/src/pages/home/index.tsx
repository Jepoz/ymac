
import styles from './home.module.scss';
// import PrimaryButton from '../../components/buttons/primary-button/primary-button';
// import ScrollReveal from '../../components/effects/scroll-reveal/scroll-reveal';

const Home = () => {  
  return (
    <div className={styles.homePage}>
      <div className={`${styles.sectionContainer} ${styles.firstSection}`}>
        <div className='flex-row justify-content-center align-items-cener'>                
          <div className={`${'flex-column justify-content-center align-items-cener'} `}>
            <div className='py-3'>
              <h2 className='text-center fade-in-up '>
                L’Cannuet: Hecho con amor para tu bebé
              </h2>  
            </div>
            <div className='py-3'>
              <p className='text-center fade-in-up '>
                Descubre nuestra hermosa colección de cunas, cambiadores, ropa, decoración y más para tu pequeño cacahuate.
              </p>  
            </div>
            <div className='flex-column justify-content-center align-items-center py-3'>
              <button >Ver productos</button>  
            </div>
                                    
          </div>

          <div>
            <img src='../../../assets/images/firstSection.png'/>
          </div>
        </div>
      </div>

      <div className={`${styles.sectionContainer} ${styles.secondSection}`}>        
          <div className='flex-row justify-content-center align-items-cener'>                
          <div className='flex-column justify-content-center align-items-cener'>
            <div className='py-3'>
              <h2 className='text-center'>
                L’Cannuet: Hecho con amor para tu bebé
              </h2>  
            </div>
            <div className='py-3'>
              <p className='text-center'>
                Descubre nuestra hermosa colección de cunas, cambiadores, ropa, decoración y más para tu pequeño cacahuate.
              </p>  
            </div>
            <div className='flex-column justify-content-center align-items-center py-3'>
              <button >Ver productos</button>  
            </div>
                                    
          </div>

          <div>
            <img src='../../../assets/images/firstSection.png'/>
          </div>
        </div>
      </div>

      <div className={`${styles.sectionContainer} ${styles.thirdSection}`}>        
          <div className='flex-row justify-content-center align-items-cener'>                
          <div className='flex-column justify-content-center align-items-cener'>
            <div className='py-3'>
              <h2 className='text-center'>
                L’Cannuet: Hecho con amor para tu bebé
              </h2>  
            </div>
            <div className='py-3'>
              <p className='text-center'>
                Descubre nuestra hermosa colección de cunas, cambiadores, ropa, decoración y más para tu pequeño cacahuate.
              </p>  
            </div>
            <div className='flex-column justify-content-center align-items-center py-3'>
              <button >Ver productos</button>  
            </div>
                                    
          </div>

          <div>
            <img src='../../../assets/images/firstSection.png'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;