import { number, string } from 'prop-types';
import Image from 'next/image';
import styles from './styles/list-item.module.scss';

import CreditCard from '../../icons/credit-card';
import Badge from '../badge';

const ListItem = ({ description, payment, score, src, title, type }) => (
  <div className={styles.item}>
    <div className={styles.imageContainer}>
      <Image src={src} alt="Picture" width={100} height={100} className={styles.image} />
    </div>
    <div className={styles.content}>
      {type && <div className={styles.type}>{type}</div>}
      <div className={styles.title}>{title}</div>
      {payment && (
        <div className={styles.paymentContainer}>
          <CreditCard />
          <span className={styles.payment}>{payment}</span>
        </div>
      )}
      <div className={styles.description}>{description}</div>
    </div>
    <div className={styles.badgeContainer}>
      <Badge score={score} />
    </div>
  </div>
);

ListItem.propTypes = {
  description: string,
  payment: string,
  score: number,
  src: string,
  title: string.isRequired,
  type: string,
};

ListItem.defaultProps = {
  payment: null,
  score: null,
  type: null,
};

export default ListItem;
