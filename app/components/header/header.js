import Image from 'next/image';
import styles from './styles/header.module.scss';
import logoImg from '../../../public/logo.svg';
import ShoppingCart from "../shoppingCart/ShoppingCart";

const Header = () => (
  <nav className={styles.header}>
    <Image src={logoImg} alt="Pedidos Rapiditos" />
    <ShoppingCart/>
  </nav>
);

export default Header;
