import styles from "./styles/restaurant.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import {getOpinionesColor} from "../../utils/styleLogic";

export default function RestaurantOpinionsBar() {

	const restaurantInfo = useSelector(
		state => state.restaurantMenu.restaurantInfo
	);

	return (
		<section className={styles.opinionsContainer}>
			<div className={styles.reviewsItems} style={{color:getOpinionesColor(restaurantInfo.calificacion_velocidad)}}>
				<FontAwesomeIcon icon={faStar} height="12" />
				<b>{restaurantInfo.calificacion_velocidad}</b> <br /> Velocidad
			</div>
			<div className={styles.reviewsItems} style={{color:getOpinionesColor(restaurantInfo.calificacion_comida)}}>
				<FontAwesomeIcon icon={faStar} height="12" />
				<b>{restaurantInfo.calificacion_comida}</b> <br /> Comida
			</div>
			<div className={styles.reviewsItems} style={{color:getOpinionesColor(restaurantInfo.calificacion_servicio)}}>
				<FontAwesomeIcon icon={faStar} height="12" />
				<b>{restaurantInfo.calificacion_servicio}</b> <br /> Servicio
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
