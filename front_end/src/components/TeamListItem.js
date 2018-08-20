import React from 'react';
import DeleteOneFromTeamButton from './DeleteOneFromTeamButton';
import './TeamListItem.css';

const TeamListItem = (props) => {

  const prettyName = props.fighter.first_name + " " + props.fighter.last_name;
  const thumbnailImg = <img
    id={props.fighter.id}
    className="teamTable-fighter-thumbnail"
    src={props.fighter.profile_image}
    alt={prettyName}/>;

  return(
    <React.Fragment>
      <tr>
        <td>{thumbnailImg}</td>
      </tr>
      {prettyName}
      <DeleteOneFromTeamButton/>
    </React.Fragment>
  )
}

export default TeamListItem;
