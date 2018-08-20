import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      map: null
    }
    this.renderMap = this.renderMap.bind(this);
  }

  renderMap(){
    const position = [51.505, -0.09];
    return(
      <Map zoom={10} center={position}>
        <TileLayer
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    )
  }
  render(){
    return(
      <React.Fragment>
        {this.renderMap()}
      </React.Fragment>
    )
  }
}

export default MapWrapper;
