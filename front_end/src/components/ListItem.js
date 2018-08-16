import React from 'react';

const ListItem = (props) => {
  const prettyName = props.player.first_name + " " + props.player.last_name;

  return(
    <p>{prettyName}</p>
  )
}

export default ListItem;
