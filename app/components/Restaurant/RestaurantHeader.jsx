import imagen from "./bannerFood.jpg"; // Tell webpack this JS file uses this image
import Image from "next/image";
import styles from "./styles/restaurant.module.scss";

export default function RestaurantHeader() {
	return (
		<div style={{ position: "relative" }}>
			<div className={styles.floatingContainer}>
				<span className={styles.deliverTag}>Entregando</span>
				<h1>Harrys Killer Burgers - Adrogué</h1>
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
