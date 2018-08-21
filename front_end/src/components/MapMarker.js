import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import _ from 'lodash';

const MapMarker = (props) => {
  if(!props.coords){
    return null;
  }

  const markers = props.coords.map((coords) => {
    return <Marker position = {[coords.lat, coords.lon]}>
      <Popup>{coords.display_name}</Popup>
    </Marker>
  })

  return(
    <React.Fragment>
      {markers}
    </React.Fragment>)

}

export default MapMarker;

// const allListItems = props.listedFighters.map((fighter, index) => {
//   return <ListItem fighter={fighter} index={index} key={index} handleFighterSelect={props.handleFighterSelect}/>
// })
//
// return(
//   <React.Fragment>
//     <table className="fighterTable">
//       <tbody>
//         <tr className="fighterTable-header">
//           {/* First th is blank as this is the thumbnail image column */}
//           <th></th>
//           <th>Name</th>
//           <th>Weight class</th>
//         </tr>
//         {allListItems}
//       </tbody>
//     </table>
//   </React.Fragment>
// )
