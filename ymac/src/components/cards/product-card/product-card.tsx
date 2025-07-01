// import WhatsappButton from '../buttons/whatsapp-button/whatsapp-button';
import styles from './product-card.module.scss';


export type ProductCardProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  
}

const ProductCard :React.FC<ProductCardProps> = props => {
  return (
    <div className={`${styles['product-card']} my-4`}>
      <div className={styles['product-image']}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles['content-info']}>
        <div className={styles['product-info']}>
          <h3>{props.name}</h3>
          <p className={styles['product-description']}>{props.description}</p>
          <div className={styles['product-price']}>${props.price.toFixed(2)}</div>        
        </div>

        <div className={styles['contact-button-container']}>
          {/* <WhatsappButton phoneNumber="+526421211926" message="Hola, me gustaría saber más sobre sus productos." /> */}
          <p className={'px-3'}>Solicitar información.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;