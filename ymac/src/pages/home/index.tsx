
import React, { useContext, useState } from 'react';
import WhatsAppButton from '../../components/buttons/whatsapp-button/whatsapp-button';
import ProductCard from '../../components/cards/product-card/product-card';
import { HoverImage } from '../../components/effects/hover-image';
import styles from './home.module.scss';
import { ScrollContext } from '../../context/scroll-context';
import ProductModal from '../../components/modals/product-modal/product-modal';
import products from '../../data/products';
import type { Product } from '../../types/product';
// import PrimaryButton from '../../components/buttons/primary-button/primary-button';
// import ScrollReveal from '../../components/effects/scroll-reveal/scroll-reveal';

const Home = () => {  
  const [showModal, setShowModal] = useState(false);
  const [productSelected, setProductSelected] = useState<Product>();

  const scroll = useContext(ScrollContext);
  if (!scroll) return null;


  const selectProduct = (product:Product) => {
    setProductSelected(product);
    setShowModal(true);
  }

  return (
    <div className={styles.homePage}>

      <div ref={scroll.homeSectionRef} className={`${styles.sectionContainer} ${styles.homeSection}`}>
        <div className={styles['home-container']}>   
          <div className={styles['home-image-container']}>            
            <HoverImage
              classNameImage={styles['home-image']}
              classNameContainer={styles['home-image-hover-container']}
              defaultImage="images/home/default.png"
              hoverImage="images/home/hover.png" 
              alt=''             
            />
          </div>                       
          <div className={styles['home-title-container']}>
            <div className='py-3'>
              <h1 className={styles['home-title']}>
                Calidad y confort para entornos laborales seguros
              </h1>  
            </div>            
            <div className='flex-column justify-content-center align-items-center py-3'>                            
              <WhatsAppButton
                phoneNumber="+526421211926" 
                message="Hola, me interesa hacer un pedido." 
              />
            </div>
                                    
          </div>          
        </div>
      </div>

      <div ref={scroll.aboutUsSectionRef} className={`${styles.sectionContainer} ${styles.aboutUsSection}`}>        
          <div  className={styles['about-us-container']}>                
            <div className={styles['about-us-title-container']}>
              <h1 className={styles['about-us-title-text']}>¿Quiénes somos?</h1>
            </div>

            <div className={styles['about-us-description-container']}>
              <p className={`${styles['about-us-description-text']} description`}>En Soluciones Industriales YMAC, protegemos la vida, la salud y el entorno laboral con soluciones integrales en seguridad industrial. Apostamos por la innovación, la calidad y la sostenibilidad para entornos de trabajo más seguros y humanos.</p>
            </div>

            <div className={styles['about-us-description-made-by-container']}>
              <h3 className={`${styles['about-us-description-made-by-text']} description`}>Zapatos completamente de procesos artesanales hechos con amor y materiales de calidad.</h3>
            </div>

            <div className={styles['about-us-distributors-container']}>
              <h3 className={`${styles['about-us-distributors-title']} description`}>Distribuidores</h3>
              <div className={styles['about-us-distributors-images-container']}>
                <div className={styles['caribu-brand-image-container']}>
                  <img className={styles['caribu-brand-image']} src='images/brand/caribu-brand.png'/>
                </div>
                <div className={styles['dutty-gear-brand-image-container']}>
                  <img className={styles['dutty-gear-brand-image']} src='images/brand/dutty-gear-brand.png'/>
                </div>
                
              </div>
            </div>
          </div>
      </div>

      <div ref={scroll.productsSectionRef} className={`${styles.sectionContainer} ${styles.productsSection}`}>        
          <div className={styles['page-products-container']}>    
            <div className={styles['page-products-title-container']}>
              <h1 className={styles['page-products-title']}>Nuestros Productos</h1>              
            </div>
            <div className={styles["products-grid"]}>
              {products.map((product) => (
                <ProductCard                 
                  key={product.name}
                  brand={product.brand}
                  name={product.name}
                  description={product.description}
                  image={product.images[0]}
                  onClick={() => selectProduct(product)}
                />
              ))}
          </div>
          
        </div>
      </div>


      {/* <div className={`${styles.sectionContainer} ${styles.contactSection}`}>        
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
            <img src='../../../assets/images/homeSection.png'/>
          </div>
        </div>
      </div> */}

      {showModal && productSelected && (
        <ProductModal product={productSelected} onClose={() => setShowModal(false)} />
      )}


    </div>
  );
};

export default Home;