import Main from "../main/main";
import Spinner from "./Spinner";

export default function Loader({ loading, children }) {
	return (
		<>
			{loading && <Main left="" right="" center={<Spinner />} />}
			{!loading && children}
		</>
	);
}
