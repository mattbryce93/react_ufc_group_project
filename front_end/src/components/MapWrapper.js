import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import './MapWrapper.css'
import _ from 'lodash';

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      fights: []
    }
    this.renderMap = this.renderMap.bind(this);
  }

  listFights(){
    return _.chain(this.props.selectedFighter.fights).map(fight => {
      return fight.Event.Location
    }).uniqBy('Venue').value();
  }

  renderMap(){
    if(!this.props.selectedFighter){
      return null;
    }
    const fights = this.listFights();
    const position = [51.505, -0.09];
    return(
      <Map zoom={10} center={position}>
        <TileLayer
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
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
