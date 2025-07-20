import WhatsAppButton from '../../buttons/whatsapp-button/whatsapp-button';
import Card from '../card/card';
import styles from './product-card.module.scss';

export type ProductCardProps = {
  name: string;
  brand: string;
  description: string[];
  image: string;
  onClick: () => void;

}

const ProductCard: React.FC<ProductCardProps> = props => {
  return (
    <Card className={`${styles['product-card']} my-4`} onClick={props.onClick}>
      <div className={styles['product-image']}>
        <img src={props.image} alt={props.name} />
      </div>

      <div className={styles['product-title-container']}>
        <h3 className={styles['product-name']}>{props.name}</h3>
        <p className={styles['product-brand']}><strong>Marca</strong> {props.brand}</p>
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
      </div>
      <div className={styles['product-button-container']}>
        <div className={styles['contact-button-container']}>
          <WhatsAppButton isShoppingButton text='Haz tu pedido' productName={props.name} productBrand={props.brand} />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;