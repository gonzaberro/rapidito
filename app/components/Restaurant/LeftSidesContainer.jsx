import styles from "./styles/restaurant.module.scss";

export default function LeftSidesContainer() {
	return (
		<>
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
		</>
	);
}
