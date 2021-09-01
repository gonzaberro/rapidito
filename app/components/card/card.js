import { node } from 'prop-types';
import styles from './styles/card.module.scss';

const Card = ({ children }) => (
  <div className={styles.card}>{children}</div>
);

Card.propTypes = {
  children: node.isRequired,
};

export default Card;
