import burger1 from "./burger.jpg"; // Tell webpack this JS file uses this image
import burger2 from "./burger2.jpeg"; // Tell webpack this JS file uses this image
import burger3 from "./burger3.jpeg"; // Tell webpack this JS file uses this image
import burger4 from "./burger4.jpg"; // Tell webpack this JS file uses this image
import styles from "./styles/restaurant.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "./MenuCard";

export default function RestaurantMainContainer() {
	return (
		<>
			<div>
				<div className={styles.recomendedMenu}>
					<h3 className={styles.recommendedMenuTitle}>Platos Recomendados</h3>
					<span className={styles.realPhotoTag}>
						<FontAwesomeIcon
							icon={faCheck}
							height="15"
							className={styles.realPhotoCheck}
						/>
						Fotos Reales
					</span>
				</div>
				<div className={styles.menuContainer}>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger1}
						price="100"
					/>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger2}
						price="100"
					/>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger3}
						price="100"
					/>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger4}
						price="100"
					/>
				</div>

				<div className={styles.recomendedMenu}>
					<h3 className={styles.recommendedMenuTitle}>Hamgurguesas</h3>
				</div>
				<div className={styles.menuContainer}>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger1}
						price="100"
					/>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger2}
						price="100"
					/>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger3}
						price="100"
					/>
					<MenuCard
						title="Hamburguesa"
						description="La mejor de todas"
						src={burger4}
						price="100"
					/>
				</div>
			</div>
		</>
	);
}
