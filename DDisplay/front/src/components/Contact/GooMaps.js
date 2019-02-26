import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import iconMark from "../../img/map-c.png";

class GooMaps extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google}
        initialCenter={{
            lat: 42.44,
            lng: 19.24
        }}
        zoom={12}>
 
            <Marker onClick={this.onMarkerClick}
            icon={iconMark}
                    name={'Current location'} />
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCGEEcuK-LoIrqoQbjVxSISPbNI3ov90Hk")
  })(GooMaps);