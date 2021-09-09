import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export function MapContainer() {
	const style = {
		height: "36%",
		borderRadius: 10,
		width: "25rem",
	};

	return (
		<Map
			google={google}
			zoom={14}
			style={style}
			initialCenter={{
				lat: -34.792136,
				lng: -58.382106,
			}}
		>
			<Marker name={"Current location"} />

			<InfoWindow>
				<div></div>
			</InfoWindow>
		</Map>
	);
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBe5telxhJecKRH6667sFm3imuLu6JQ6hw",
})(MapContainer);
