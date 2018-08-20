import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import './MapWrapper.css'
import _ from 'lodash';

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      fights: [],
      coords: null
    }
    this.renderMap = this.renderMap.bind(this);
  }

  listFights(){
    return _.chain(this.props.selectedFighter.fights).map(fight => {
      return fight.Event.Location
    }).uniqBy('Venue').value();
  }

  getCoords(location){
    const url="https://nominatim.openstreetmap.org/search?q=Mumbai&format=json"
    return (
      fetch(url)
      .then(response => response.json())
      )
    }

  renderMarkers(locations){
    const apiResponse= _.map(locations, location => {
      this.setState({coords: this.getCoords(location)})

    })
    debugger;

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
        {this.renderMarkers(fights)}
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
