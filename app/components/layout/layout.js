import { node } from 'prop-types';
import styles from './styles/layout.module.scss';

// TODO: This is desktop layout, mobile needed?
const Layout = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
