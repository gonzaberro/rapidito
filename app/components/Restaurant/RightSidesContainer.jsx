import styles from "./styles/restaurant.module.scss";
import GoogleApiWrapper from "./GoogleApiWrapper";

export default function RightSidesContainer() {
	return (
		<>
			<div
				className={styles.sideContainers}
				style={{
					height:"60%",
					background: "white",
					marginTop: "3rem",
					marginRight: "3rem",
					borderRadius: 10,
					paddingLeft:  "1rem",
					paddingTop:  "1rem",
				}}
			>
				<GoogleApiWrapper />
			</div>
		</>
	);
}
