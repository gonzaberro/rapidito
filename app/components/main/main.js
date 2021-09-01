import { node } from 'prop-types';
import styles from './styles/main.module.scss';

const Main = ({ center, left, right }) => (
  <main className={styles.main}>
    <div className={styles.grid}>
      {left && <div className={styles.left}>{left}</div>}
      <div className={styles.center}>{center}</div>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  </main>
);

Main.propTypes = {
  center: node.isRequired,
  left: node,
  right: node,
};

Main.defaultProps = {
  left: null,
  right: null,
};

export default Main;
