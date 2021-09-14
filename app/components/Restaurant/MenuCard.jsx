import { number, string } from "prop-types";
import Image from "next/image";
import styles from "./styles/card.module.scss";

// TODO: Extract Image
const MenuCard = ({ src, title, description, price, cardActionButton }) => (
	<div className={styles.card}>
		<Image
			src={src}
			alt="Picture"
			width={250}
			height={150}
			className={styles.image}
		/>
		<div className={styles.cardInfo}>
			<span className={styles.title}>{title}</span>
			<span className={styles.description}>{description}</span>
			<div className={styles.finalRow}>
				<span className={styles.price}>{`${price}`}</span>
				{cardActionButton}
			</div>
		</div>
	</div>
);

MenuCard.propTypes = {
	description: string,
	price: number.isRequired,
	src: string.isRequired,
	title: string.isRequired,
};

MenuCard.defaultProps = {
	description: null,
};

export default MenuCard;
