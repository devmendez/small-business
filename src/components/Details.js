import React from 'react'
import { Container } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Details = (props) => {
    const id = props.match.params.id
    const listings = props.listings.find(d => d.id == id)


const defaultProps = {
    center: {
        lat: Number(listings.Latitude),
        lng: Number(listings.Longitude),
    },
    zoom: 11
}


    return (
        <Container maxWidth="sm" className="details-container">
            <h2>{listings.Name}</h2>
                <h4>{listings.Address}</h4>
                <h4>{listings.Hours}</h4>
                <p>{listings.Description}</p>
            <Container style={{ height: "400px", width: "450px"}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent lat={listings.Latitude} lng={listings.Longitude} text={listings.Name} />
                </GoogleMapReact>
            </Container>
        </Container>
    )
}
export default Details

