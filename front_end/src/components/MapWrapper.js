import React, {Component} from 'react';
import { Map, TileLayer } from 'react-leaflet';
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
    this.getAverageCoord = this.getAverageCoord.bind(this);
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
    _.forEach(this.state.locations, location => {
      const url="http://localhost:3001/api/coords/" + location.City;
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({current_coords: data}, this.insertCoords))
    })
  }

  insertCoords(){
    let coords = this.state.coords;
    let current_coords = this.state.current_coords;
    coords.push(current_coords[0]);
    this.setState({coords}, this.getAverageCoord);
  }

  getAverageCoord(){
    let coords = this.state.coords;
    let all_lats = [];
    _.map(coords, function(coord){
      all_lats.push(parseFloat(coord.lat));
    });
    let all_lons = [];
    _.map(coords, function(coord){
      all_lons.push(parseFloat(coord.lon));
    });
    let avg_lat = _.meanBy(all_lats);
    let avg_lon = _.meanBy(all_lons);
    this.setState({avg_coord: [avg_lat, avg_lon]})
  }





  render(){
    if(!this.props.selectedFighter){
      return null;
    }

    const position = this.state.avg_coord;
    return(
      <React.Fragment>
        <Map zoom={1.5} center={position}>
          <TileLayer
            url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <MapMarker coords={this.state.coords}/>
        </Map>
      </React.Fragment>
    )
  }
}

export default MapWrapper;
