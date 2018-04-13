import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import './Map.css';

class Map extends Component {
  render() {
    const NEWSKIN_OFFICE_COORDS = {lat: -15.82258542068137, lng: -48.12326073646545};
    const INITIAL_ZOOM_LEVEL = 18;

    // TODO: change to night mode
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { NEWSKIN_OFFICE_COORDS }
        defaultZoom = { INITIAL_ZOOM_LEVEL }
      >
      </GoogleMap>
   ));

    return (
      <GoogleMapExample
        containerElement={ <div className='Map' /> }
        mapElement={ <div style={{ height: `100%` }} /> }
      />
    );
  }
}

export default Map;
