import { useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import styles from './styles/carousel.module.scss';

import Card from './card';
import Button from './button';

const MAX_DISPLAY_QUANTITY = 4;

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);

  if (data == null || !Array.isArray(data) || data.length <= 0) {
    return null;
  }

  const { length } = data;

  const previous = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1));
  };

  const next = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1));
  };

  const renderCards = data.map((card, index) => (<Card key={index} {...card} />));

  return (
    <section className={styles.container}>
      {current !== 0 && <Button orientation="left" onClick={previous} />}
      <div className={styles.carousel}>
        {renderCards && renderCards.map((card, index) => (
          <div key={index} className={styles.wrapper}>
            {card}
          </div>
        ))}
      </div>
      {(current !== length - 1 && length > MAX_DISPLAY_QUANTITY) && <Button orientation="right" onClick={next} />}
    </section>
  );
};

Carousel.propTypes = {
  // TODO: Add correct data shape
  data: arrayOf(shape()),
};

Carousel.defaultProps = {
  data: null,
};

export default Carousel;
