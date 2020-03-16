import React from 'react'
import { Container } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Details = (props) => {
    const id = props.match.params.id
    const listing = props.listing.find(d => d.id == id)


const defaultProps = {
    center: {
        lat: Number(listing.Latitude),
        long: Number(listing.Longitude),
    },
    zoom: 11
}


    return (
        <Container maxWidth="sm" className="details-container">
            <h2>{listing.Name}</h2>
                <h4>{listing.Address}</h4>
                <h4>{listing.Hours}</h4>
                <p>{listing.Description}</p>
            <Container style={{ height: "400px", width: "450px"}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent lat={listing.Latitude} long={listing.Longitude} text={listing.Name} />
                </GoogleMapReact>
            </Container>
        </Container>
    )
}
export default Details

