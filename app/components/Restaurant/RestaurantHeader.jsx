import styles from "./styles/restaurant.module.scss";
import { useSelector } from "react-redux";

export default function RestaurantHeader({ setSearchProduct, searchProduct }) {
	const restaurantInfo = useSelector(
		state => state.restaurantMenu.restaurantInfo
	);

	const isRestaurantOpen = () =>{

		const now = new Date();
		const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
		
		return restaurantInfo.hora_apertura<time && (restaurantInfo.hora_cierre>time || restaurantInfo.hora_cierre<restaurantInfo.hora_apertura);
	}

	return (
		<div style={{ position: "relative" }}>
			
			<div className={styles.floatingContainer}>
				<span
					className={
						isRestaurantOpen() ? styles.deliverTag : styles.closeTag
					}
				>
					{isRestaurantOpen() ? "Entregando" : "Cerrado"}
				</span>
				<h1>{restaurantInfo.nombre}</h1>
				<h4>{restaurantInfo.descripcion}</h4>
				<input
					placeholder="Buscar Productos..."
					className={styles.productSearch}
					onChange={(e) => setSearchProduct(e.target.value)}
					value={searchProduct}
				/>
			</div>
			<div
				className={styles.bannerImage}
				style={{ backgroundImage: `url(${restaurantInfo.banner})` }}
			></div>
		</div>
	);
}
