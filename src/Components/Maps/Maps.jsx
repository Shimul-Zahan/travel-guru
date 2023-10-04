import React, { useContext } from "react";
import GoogleMapReact from 'google-map-react';
import { MyContext } from "../../Context/ContextAuth";
// import MAP_API_KEY from "../../MAP_API_KEY";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function SimpleMap() {

    const { places } = useContext(MyContext);

    const defaultProps = {

        center: {
            lat: 21.4512,
            lng: 92.0085
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '650px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAf3nfJvlpTc2NqifNxEV1oUtiF3mQPxUU" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}