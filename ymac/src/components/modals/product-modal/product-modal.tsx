import React from "react";
import styles from "./product-modal.module.scss";
import type { Product } from "../../../types/product";
import ShoppingBagButton from "../../buttons/shopping-bag-button/shopping-bag-button";

interface ProductModalProps {
  product: Product;
  onClose: () => void;  
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [mainImage, setMainImage] = React.useState(product.images[0]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <div className={styles.content}>
          <div className={styles.gallery}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index}`}
                className={mainImage === img ? styles.activeThumb : ""}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className={styles['main-image-container']}>
            <img className={styles['main-image']}  src={mainImage} alt="Main product" />
          </div>

          <div className={styles.details}>
            <h2>{product.name}</h2>
            <p className={styles.brand}><strong>Marca:</strong> {product.brand}</p>
            <div>
              <strong>Descripción</strong>
              <ul className="default-list">
                {product.description.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            
            <ShoppingBagButton className={styles.orderButton} text='Haz tu pedido'/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
