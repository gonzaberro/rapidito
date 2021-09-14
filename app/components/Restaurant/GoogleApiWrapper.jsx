import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export function MapContainer({ position }) {
	const style = {
		height: "36%",
		borderRadius: 10,
		width: "25rem",
	};

	return (
		<Map
			google={google}
			zoom={15}
			style={style}
			initialCenter={{
				lat: position.latitud,
				lng: position.longitud,
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
