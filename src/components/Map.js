import { Container } from "@material-ui/core/";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Map = (props) => {

    const defaultProps = {
        center: {
            lat: props.lat,
            long: props.long,
        },
        zoom: 11
    };

    return (
        <Container style={{ height: '400px', width: '400px',margin: 'auto', padding: '40px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <LocationOnIcon
                    lat={props.lat}
                    long={props.long}
                />
            </GoogleMapReact>
        </Container>
    )
}

export default Map; 
