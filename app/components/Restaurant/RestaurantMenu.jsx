import imagen from "./bannerFood.jpg"; // Tell webpack this JS file uses this image

import burger1 from "./burger.jpg"; // Tell webpack this JS file uses this image
import burger2 from "./burger2.jpeg"; // Tell webpack this JS file uses this image
import burger3 from "./burger3.jpeg"; // Tell webpack this JS file uses this image
import burger4 from "./burger4.jpg"; // Tell webpack this JS file uses this image

import Image from "next/image";
import styles from "./styles/restaurant.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faChevronRight,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
	return (
		<div>
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
				<Image
					src={imagen}
					alt="Banner"
					className={styles.bannerImage}
					layout="responsive"
					height="70"
				/>
			</div>
			<section className={styles.opinionsContainer}>
				<div className={styles.reviewsItems}>
					<FontAwesomeIcon icon={faStar} height="12" />
					<b>4.3</b> <br /> Velocidad
				</div>
				<div className={styles.reviewsItems}>
					<FontAwesomeIcon icon={faStar} height="12" />
					<b>4.4</b> <br /> Comida
				</div>
				<div className={styles.reviewsItems}>
					<FontAwesomeIcon icon={faStar} height="12" />
					<b>4.1</b> <br /> Servicio
				</div>
				<div className={styles.opinionsButtonContainer}>
					<button className={styles.opinionsButton}>
						200 opiniones{" "}
						<FontAwesomeIcon
							icon={faChevronRight}
							height="15"
							className={styles.opinionsChevron}
						/>
					</button>
				</div>
			</section>
			<section className={styles.mainContainer}>
				<div style={{ flex: 1 }}>
					<div
						className={styles.sideContainers}
						style={{
							height: "60%",
							background: "white",
							marginTop: "3rem",
							marginLeft: "3rem",
							borderRadius: 10,
						}}
					></div>
				</div>
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
				<div style={{ flex: 1 }}>
					<div
						className={styles.sideContainers}
						style={{
							height: "60%",
							background: "white",
							marginTop: "3rem",
							marginRight: "3rem",
							borderRadius: 10,
						}}
					></div>
				</div>
			</section>
		</div>
	);
}
