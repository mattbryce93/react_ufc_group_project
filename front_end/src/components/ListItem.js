import React from 'react';
import AddToTeamButton from './AddToTeamButton'

const ListItem = (props) => {
  const prettyName = props.player.first_name + " " + props.player.last_name;

  return(
    <React.Fragment>
      <p>{prettyName} {props.player.weight_class}</p>
      <AddToTeamButton fighter={props.player}/>
    </React.Fragment>

  )
}

export default ListItem;
