import React from "react";
import styles from "./product-modal.module.scss";
import type { Product } from "../../../types/product";
import ProductDetailCard from "../../cards/product-detail-card/product-detail-card";

interface ProductModalProps {
  product: Product;
  onClose: () => void;  
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <ProductDetailCard product={product} />
      </div>
    </div>
  );
};

export default ProductModal;
