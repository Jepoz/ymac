import React from "react";
import styles from "./product-detail-card.module.scss";
import type { Product } from "../../../types/product";
import WhatsAppButton from "../../buttons/whatsapp-button/whatsapp-button";

interface ProductDetailCardProps {
  product: Product;
  showGallery?: boolean; // Por si quieres ocultar las miniaturas
  onImageClick?: (img: string) => void;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  product,
  showGallery = true,
  onImageClick,
}) => {
  const [mainImage, setMainImage] = React.useState(product.images[0]);

  const handleThumbClick = (img: string) => {
    setMainImage(img);
    onImageClick?.(img);
  };

  return (
    <div className={styles.container}>
      {showGallery && (
        <div className={styles.gallery}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              className={mainImage === img ? styles.activeThumb : ""}
              onClick={() => handleThumbClick(img)}
            />
          ))}
        </div>
      )}

      <div className={styles["main-image-container"]}>
        <img
          className={styles["main-image"]}
          src={mainImage}
          alt="Main product"
        />
      </div>

      <div className={styles.details}>
        <h2>{product.name}</h2>
        <p className={styles.brand}>
          <strong>Marca:</strong> {product.brand}
        </p>
        <div>
          <strong>Descripción</strong>
          <ul className="default-list">
            {product.description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
        <WhatsAppButton isShoppingButton className={styles.orderButton} text='Haz tu pedido' productName={product.name} productBrand={product.brand}/>
      </div>
    </div>
  );
};

export default ProductDetailCard;
