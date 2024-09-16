import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import GoogleMarker from "./GoogleMarker";

export default function GoogleMap({ pet }) {
    let props = {
        center: {
            lat: pet?.user?.location?.latitude,
            lng: pet?.user?.location?.longitude,
        },
        zoom: 12,
    }
    return (
        <div className="GoogleMap">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.GOOGLEMAINKEY}}
                defaultCenter={props.center}
                options={{ 
                    scrollwheel: false,
                    zoomControl: false,
                    keyboardShortcuts: false,
                    fullscreenControl: false,
                    disableDefaultUI: true,
                    scaleControl: true,
                    disableDoubleClickZoom: true,
                }}
                defaultZoom={props.zoom}>
                    <GoogleMarker lat={props?.center?.lat} lng={props?.center?.lng}/>
            </GoogleMapReact>

        </div>
    )
}