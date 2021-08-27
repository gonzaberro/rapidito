import { number, string } from 'prop-types';
import Image from 'next/image';
import styles from './styles/card.module.scss';

// TODO: Extract Image
const Card = ({ src, title, description, price }) => (
  <div className={styles.card}>
    <Image src={src} alt="Picture" width={220} height={270} className={styles.image} />
    <div>
      <span className={styles.price}>{`$${price}`}</span>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
    </div>
  </div>
);

Card.propTypes = {
  description: string,
  price: number.isRequired,
  src: string.isRequired,
  title: string.isRequired,
};

Card.defaultProps = {
  description: null,
};

export default Card;
