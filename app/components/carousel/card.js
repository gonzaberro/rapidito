import { number, string } from 'prop-types';
import Image from 'next/image';
import styles from './styles/card.module.scss';

const Card = ({ src, title, description, price }) => (
  <div className={styles.card}>
    <Image src={src} alt="Picture" width={215} height={215} className={styles.image} />
    <div className={styles.content}>
      {description && <span className={styles.description}>{description}</span>}
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{`$${price}`}</span>
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
