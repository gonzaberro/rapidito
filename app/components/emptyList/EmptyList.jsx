import styles from "../emptyList/styles/emptylist.module.scss";
import image from "./product-not-found.png";

export default function EmptyList({ list, children }) {
	return (
		<>
			{Object.keys(list).length === 0 && (
				<div className={styles.emptyMessageContainer}>
					<img
						alt="Not found"
						height="300"
						src="data:image/png;base64,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"
					/>
				</div>
			)}
			{Object.keys(list).length > 0 && children}
		</>
	);
}
