import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './searchBox.module.scss';

const SearchBox = ({ searchOnPress }) => {
  const [text, setText] = useState('Ingrese su dirección');
  const onPress = () => {
    searchOnPress(text);
  };
  return (
    <div className={styles.wrap}>
       <p className={styles.titleSearch}>¡Volá con tu delivery online!</p>
       <p className={styles.subTitleSearch}>Buscá tu restaurant favorito</p>
      <div className={styles.search}>
        <input type="text" className={styles.searchInput} placeholder={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" className={styles.searchButton} onClick={onPress}>
          Buscar
        </button>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  // eslint-disable-next-line react/require-default-props
  searchOnPress: PropTypes.func,
};

export default SearchBox;
