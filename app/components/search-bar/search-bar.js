import { func, string } from 'prop-types';
import styles from './styles/search-bar.module.scss';

import Search from '../../icons/search';
import TextInput from '../text-input';

const SearchBar = ({ onChange, placeholder }) => (
  <div className={styles.searchBar}>
    <Search />
    <TextInput
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

SearchBar.propTypes = {
  onChange: func,
  placeholder: string,
};

SearchBar.defaultProps = {
  onChange: null,
  placeholder: 'Buscar...',
};

export default SearchBar;
