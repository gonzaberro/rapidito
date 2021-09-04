import styles from "./styles/spinner.module.scss";

export default function Spinner() {
	return (
		<div className={styles.spinnerContainer}>
			<p className={styles.spinnerText}>P</p>
		</div>
	);
}
