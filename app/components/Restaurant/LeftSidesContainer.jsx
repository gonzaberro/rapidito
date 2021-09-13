import { useSelector } from "react-redux";
import styles from "./styles/leftContainer.module.scss";
import Card from "../card";

export default function LeftSidesContainer({ setProductCategory, productCategory }) {
	const restaurantInfo = useSelector(
		state => state.restaurantMenu.restaurantInfo
	);
	const menuProducts = useSelector(state => state.restaurantMenu.menuProducts);

	console.log(Object.getOwnPropertyNames(menuProducts));

	return (
		<Card>
			<h3 className={styles.menuTitle}>Menú de {restaurantInfo.nombre}</h3>
			<h4 className={styles.categoryProducts} style={productCategory === "" && { fontWeight: "bold" } || {}} onClick={() => setProductCategory("")}>Mostrar Todo</h4>
			{Object.getOwnPropertyNames(menuProducts).map(category => {
				return <><h4 className={styles.categoryProducts} style={productCategory === category && { fontWeight: "bold" } || {}} onClick={() => setProductCategory(category)}>{category}</h4></>
			})}
		</Card>
	);
}
