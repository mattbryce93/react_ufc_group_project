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
      coords: []
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(!this.props.selectedFighter){
      return null;
    }
    let locations =[]
    let venues = (_.chain(this.props.selectedFighter.fights).map(fight => {
      return fight.Event.Location
    }).uniqBy('Venue').value());
    locations.push(venues)
    this.setState({locations});
  }

  // getCoords(){
  //   const url="https://nominatim.openstreetmap.org/search?q=Mumbai&format=json"
  //   debugger;
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => this.setState({coords: data}))
  //   }

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
