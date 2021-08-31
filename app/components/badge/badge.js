import { number, oneOf, string } from 'prop-types';
import styles from './styles/badge.module.scss';

import Star from '../../icons/star';

const TYPE = {
  STAR: 'star',
};

const Badge = ({ score, type, }) => {
  let Icon = null;

  if (TYPE.STAR === type) {
    Icon = <Star />;
  }

  return (
    <div className={styles.badge}>
      {Icon}
      {score && <span className={styles.score}>{score}</span>}
    </div>
  );
};

Badge.propTypes = {
  score: number,
  type: oneOf(['star']),
};

Badge.defaultProps = {
  score: null,
  type: 'star',
};

export default Badge;
