import { func, oneOf } from 'prop-types';
import ChevronLeft from '../../icons/chevron-left';
import ChevronRight from '../../icons/chevron-right';

import styles from './styles/button.module.scss';

const ORIENTATION = {
  LEFT: 'left',
  RIGHT: 'right',
};

const Button = ({ orientation, onClick }) => {
  let button = null;

  if (ORIENTATION.LEFT === orientation) {
    button = <ChevronLeft className={`${styles.button} ${styles.left}`} />;
  } else if (ORIENTATION.RIGHT === orientation) {
    button = <ChevronRight className={`${styles.button} ${styles.right}`} />;
  }

  if (button == null) {
    return null;
  }

  return <div onClick={onClick}>{button}</div>;
};

Button.propTypes = {
  orientation: oneOf(['left', 'right']).isRequired,
  onClick: func,
};

Button.defaultProps = {
  onClick: null,
};

export default Button;
