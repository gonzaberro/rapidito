import Image from 'next/image';
import styles from './styles/header.module.scss';
import logoImg from '../../../public/logo.svg';

const Header = () => (
  <nav className={styles.header}>
    <Image src={logoImg} alt="Pedidos Rapiditos" />
  </nav>
);

export default Header;
