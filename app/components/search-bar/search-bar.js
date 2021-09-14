import { func, string } from 'prop-types';
import styles from './styles/search-bar.module.scss';

import Search from '../../icons/search';
import TextInput from '../text-input';

const SearchBar = ({ onChange, placeholder, value }) => (
  <div className={styles.searchBar}>
    <Search />
    <TextInput
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </div>
);

SearchBar.propTypes = {
  onChange: func,
  placeholder: string,
  value: string,
};

SearchBar.defaultProps = {
  onChange: null,
  placeholder: 'Buscar...',
  value: '',
};

export default SearchBar;
