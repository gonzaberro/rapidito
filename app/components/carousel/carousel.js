import { Children } from 'react';
import { arrayOf, element } from 'prop-types';
import styles from './styles/carousel.module.scss';

const Carousel = ({ children }) => (
  <div className={styles.carousel}>
    {children && Children.map(children, (child) => (
      <div className={styles.wrapper}>
        {child}
      </div>
    ))}
  </div>
);

Carousel.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Carousel;
