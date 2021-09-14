import { func, number, string } from 'prop-types';
import Image from 'next/image';
import styles from './styles/list-item.module.scss';

import CreditCard from '../../icons/credit-card';
import QuestionMark from '../../icons/question-mark';
import Badge from '../badge';

import { getOpinionesColor } from '../../utils/styleLogic';

const ListItem = ({ description, onClick, payment, score, src, title, type }) => (
  <div className={styles.item} onClick={onClick}>
    <div className={styles.imageContainer}>
      {src
        ? <Image src={src} alt="Picture" width={100} height={100} className={styles.image} unoptimized /> : (
          <div className={styles.notFound}>
            <QuestionMark />
          </div>
        )}
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
      {description && <div className={styles.description}>{description}</div>}
    </div>
    {score && (
      <div className={styles.badgeContainer}>
        <Badge score={score} color={getOpinionesColor(score)}/>
      </div>
    )}
  </div>
);

ListItem.propTypes = {
  description: string,
  onClick: func,
  payment: string,
  score: number,
  src: string,
  title: string.isRequired,
  type: string,
};

ListItem.defaultProps = {
  description: null,
  onClick: null,
  payment: null,
  score: null,
  src: null,
  type: null,
};

export default ListItem;
