import Image from 'next/image';
import styles from './styles/navbar.module.scss';
import logoImg from '../../../public/logo.svg';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Image src={logoImg} alt="Pedidos Rapiditos" />
  </nav>
);

export default Navbar;
