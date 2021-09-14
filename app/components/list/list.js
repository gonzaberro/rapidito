import { useRouter } from 'next/router';

import { arrayOf, shape, string } from 'prop-types';
import styles from './styles/list.module.scss';

import ListItem from './list-item';

const List = ({ data, title }) => {
  const router = useRouter();

  const handleOnClick = (e, item) => {
    e.preventDefault();
    router.push(`/menu?${item.title}=${item.id}`);
  };

  return (
    <section className={styles.list}>
      {title && <h1>{title}</h1>}
      {data && data.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <ListItem {...item} onClick={(e) => handleOnClick(e, item)} />
        </div>
      ))}
    </section>
  );
};

List.propTypes = {
  // TODO: Add correct data shape
  data: arrayOf(shape()),
  title: string,
};

List.defaultProps = {
  data: null,
  title: null,
};

export default List;
