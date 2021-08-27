import { node } from 'prop-types';
import styles from './styles/main.module.scss';

const Main = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
