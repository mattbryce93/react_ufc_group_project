import React from 'react';
import DeleteOneFromTeamButton from './DeleteOneFromTeamButton';
import './TeamListItem.css';

const TeamListItem = (props) => {

  const prettyName = props.fighter.first_name + " " + props.fighter.last_name;
  const thumbnailImg = <img
    id={props.fighter.id}
    className="teamListItem-fighter-thumbnail"
    src={props.fighter.profile_image}
    alt={prettyName}/>;

    return(
      <React.Fragment>
        <div className="teamListItem">
          {thumbnailImg}
          {prettyName}
          <DeleteOneFromTeamButton/>
        </div>
      </React.Fragment>
    )
  }

  export default TeamListItem;
