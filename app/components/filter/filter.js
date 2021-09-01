import { string } from 'prop-types';
import styles from './styles/filter.module.scss';

const Filter = ({ name }) => (
  <a className={styles.filter} href='#'>{name}</a>
);

Filter.propTypes = {
  name: string.isRequired,
};

Filter.defaultProps = {

};

export default Filter;
