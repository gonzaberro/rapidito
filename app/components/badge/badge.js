import { number, oneOf, string } from 'prop-types';
import styles from './styles/badge.module.scss';

import Star from '../../icons/star';

const TYPE = {
  STAR: 'star',
};

const Badge = ({ color, score, type }) => {
  let Icon = null;

  if (TYPE.STAR === type) {
    Icon = <Star color={color} />;
  }

  return (
    <div className={styles.badge} style={{ color: color}}>
      {Icon}
      {score && <span className={styles.score}>{score}</span>}
    </div>
  );
};

Badge.propTypes = {
  color: string,
  score: number,
  type: oneOf(['star']),
};

Badge.defaultProps = {
  color: null,
  score: null,
  type: 'star',
};

export default Badge;
