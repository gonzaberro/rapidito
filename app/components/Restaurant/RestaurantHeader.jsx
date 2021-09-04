import styles from "./styles/restaurant.module.scss";
import { useSelector } from "react-redux";

export default function RestaurantHeader() {
	const restaurantInfo = useSelector(
		
		state => state.restaurantMenu.restaurantInfo
	
	);

	return (
		<div style={{ position: "relative" }}>
			<div className={styles.floatingContainer}>
				<span className={restaurantInfo.activo ? styles.deliverTag : styles.closeTag}>{restaurantInfo.activo ? "Entregando" : "Cerrado"}</span>
				<h1>{restaurantInfo.nombre}</h1>
				<h4>30 - 45 min | $89 envío | Sin mínimo</h4>
				<input
					placeholder="Buscar Productos..."
					className={styles.productSearch}
				/>
			</div>
			<div className={styles.bannerImage}></div>
		</div>
	);
}
