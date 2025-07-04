// import WhatsappButton from '../buttons/whatsapp-button/whatsapp-button';
import Button from '../../buttons/button/button';
import ShoppingBagButton from '../../buttons/shopping-bag-button/shopping-bag-button';
import styles from './product-card.module.scss';

export type ProductCardProps = {
  name: string;  
  brand: string;
  description: string[];  
  image: string;
  onClick: () => void;
  
}

const ProductCard :React.FC<ProductCardProps> = props => {
  return (
    <div className={`${styles['product-card']} my-4`} onClick={props.onClick}>
      <div className={styles['product-image']}>
        <img src={props.image} alt={props.name} />
      </div>

      <div className={styles['product-title-container']}>
        <h3>{props.name}</h3>
        <p><b>Marca</b> {props.brand}</p>
      </div>

      <div className={styles['product-description-container']}>
        <div className={styles['product-info']}>         
          <p className={styles['product-title-description']}><b>Descripción</b></p> 
            <ul className='default-list'>
              {props.description.map((line, index) => (
                <li key={index} className={styles['product-description']}>{line}</li>
              ))}
            </ul>          
        </div>

        <div className={styles['contact-button-container']}>          
          <ShoppingBagButton text='Haz tu pedido'/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;