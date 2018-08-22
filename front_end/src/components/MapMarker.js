import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const MapMarker = (props) => {
  if(props.coords.length === 0){
    return null;
  }
  const markers = props.coords.map((coord) => {
    if (!coord || !coord.lat || !coord.lon || !coord.display_name){
      return null;
    }
    return (
      <Marker position = {[coord.lat, coord.lon]} key={coord.lat}>
      <Popup>{coord.display_name}</Popup>
    </Marker>
    )
  })

  return(
    <React.Fragment>
      {markers}
    </React.Fragment>)

}

export default MapMarker;
