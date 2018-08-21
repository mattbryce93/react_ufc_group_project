import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import MapMarker from './MapMarker'
import './MapWrapper.css'
import _ from 'lodash';

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      locations: [],
      coords: [],
      current_coords: null
    }
    this.getCoords = this.getCoords.bind(this);
    this.insertCoords = this.insertCoords.bind(this);
  }

  componentDidMount(){
    if(!this.props.selectedFighter){
      return null;
    }
    let locations = (_.chain(this.props.selectedFighter.fights).map(fight => {
      return fight.Event.Location
    }).uniqBy('Venue').value());
    this.setState({locations}, this.getCoords);
  }

  getCoords(){
    let coords = _.map(this.state.locations, location => {
      const url="http://localhost:3001/api/coords/" + location.City;
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({current_coords: data}, this.insertCoords))
    })
    console.log(this.state);
  }

  insertCoords(){
    let coords = this.state.coords;
    let current_coords = this.state.current_coords;
    coords.push(current_coords);
    this.setState({coords});
  }

  render(){
    if(!this.props.selectedFighter){
      return null;
    }
    const position = [51.505, -0.09];
    return(
      <React.Fragment>
        <Map zoom={10} center={position}>
          <TileLayer
            url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Map>
      </React.Fragment>
    )
  }
}

export default MapWrapper;
