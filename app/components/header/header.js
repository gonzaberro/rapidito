import Image from 'next/image';
import styles from './styles/header.module.scss';
import logoImg from '../../../public/logo.svg';
import ShoppingCart from "../shoppingCart/ShoppingCart";
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter();

  debugger;
  return (<nav className={styles.header}>
    <span  style={{cursor: "pointer"}} ><Image src={logoImg} alt="Pedidos Rapiditos"onClick={()=>router.push("/")}/></span>
    <span className={styles.shoppingContainer}>{router.route=== "/menu" && <ShoppingCart/>}</span>
  </nav>)
};

export default Header;
