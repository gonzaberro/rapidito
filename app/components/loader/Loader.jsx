import Main from "../main/main";
import Spinner from "./Spinner";

export default function Loader({ loading, children }) {
	return (
		<>
			{loading && <Main center={<Spinner />} />}
			{!loading && children}
		</>
	);
}
