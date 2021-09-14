/* eslint-disable react/jsx-key */
import { arrayOf, shape, string } from 'prop-types';
import styles from './styles/filter-list.module.scss';

import Filter from './filter';

const FilterList = ({ title, filters }) => (
  <dl>
    {title && <dt className={styles.title}>{title}</dt>}
    {filters && filters.map((filter, index) => (
      <dd className={styles.container}>
        <Filter key={index} {...filter} />
      </dd>
    ))}
  </dl>
);

FilterList.propTypes = {
  title: string,
  filters: arrayOf(shape({
    name: string,
  })).isRequired,
};

FilterList.defaultProps = {
  title: null,
};

export default FilterList;
