import styles from "./styles/restaurant.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantOpinionsBar() {
	return (
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
	);
}
