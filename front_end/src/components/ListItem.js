import React from 'react';
import AddToTeamButton from './AddToTeamButton';
import "./ListItem.css";

const ListItem = (props) => {
  const prettyName = props.fighter.first_name + " " + props.fighter.last_name;
  const thumbnailImg = <img id={props.fighter.id} className="fighterTable-fighter-thumbnail" src={props.fighter.profile_image} alt={prettyName}/>;

  return(
    <React.Fragment>
      <tr className="fighterTable-list-item" onClick={props.handleFighterSelect}>
        <td id={props.fighter.id}>{thumbnailImg}</td>
        <td id={props.fighter.id} className="fighterTable-fighter-name">{prettyName}</td>
        <td id={props.fighter.id} className="fighterTable-fighter-weightclass">{props.fighter.weight_class}</td>

        <td className="fighterTable-addToTeamButton">
          <AddToTeamButton
            fighter={props.fighter} 
            handleAddToTeamButton={props.handleAddToTeamButton}/>
        </td>
      </tr>
    </React.Fragment>

  )
}

export default ListItem;
