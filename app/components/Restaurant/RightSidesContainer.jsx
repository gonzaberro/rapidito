import styles from "./styles/restaurant.module.scss";

export default function RightSidesContainer() {
	return (
		<>
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
		</>
	);
}
