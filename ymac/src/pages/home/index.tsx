
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
        <div className='flex-row justify-content-center align-items-cener'>   
          <div>            
            <HoverImage
            className={styles['home-image']}
              defaultImage="images/botas1.jpg"
              hoverImage="images/botas2.png" 
              alt=''             
            />
          </div>                       
          <div className={`${'flex-column justify-content-center align-items-cener'} `}>
            <div className='py-3'>
              <h1 className='text-center fade-in-up '>
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
          <div className='flex-row justify-content-center align-items-cener'>                
          <div className='flex-column justify-content-center align-items-cener'>
            <div className='py-3'>
              <h2 className='text-center'>
                Calidad y confort para entornos laborales seguros
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
            <img src='../../assets/images/botas2.png'/>
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