
import React, { useContext, useState } from 'react';
import WhatsAppButton from '../../components/buttons/whatsapp-button/whatsapp-button';
import ProductCard from '../../components/cards/product-card/product-card';
import { HoverImage } from '../../components/effects/hover-image';
import styles from './home.module.scss';
import { ScrollContext } from '../../context/scroll-context';
import ProductModal from '../../components/modals/product-modal/product-modal';
import products from '../../data/products';
import type { Product } from '../../types/product';
import ProductDetailCard from '../../components/cards/product-detail-card/product-detail-card';
import Card from '../../components/cards/card/card';
import Constants from '../../constants/constants';

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
                text='¡Pide por WhatsApp!'
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
                  onClick={() => console.log('test')}
                />
              ))}
          </div>

          <div className={styles["most-popular-product-container"]}>
            <div className={styles['most-popular-product-title-container']}>
              <h1 className={styles['most-popular-product-title']}>El modelo más pedido</h1>              
            </div>
            <Card className={styles['most-popular-product-card']}>
              <ProductDetailCard product={products[0]}/>
            </Card>
          </div>
          
        </div>
      </div>


      <div ref={scroll.contactSectionRef} className={`${styles.contactSection}`}>   
        <img src='images/backgrounds/contact-background.png'/>

        <div className={styles['contact-description-container']}>
          <div className={styles['brand-image-container']}>
              <img src='images/brand/brand.png'/>
          </div>

          <div className={styles['description-container']}>
              <h2 className={`${styles['description']} font-text-regular`}>¿Te interesa alguno de nuestros productos? <strong>Escríbenos ahora.</strong></h2>
              <img src='images/contact/contact-whatsapp.png'/>
          </div>
        </div>             
      </div>

      {showModal && productSelected && (
        <ProductModal product={productSelected} onClose={() => setShowModal(false)} />
      )}


    </div>
  );
};

export default Home;