import React from 'react';

const ListItem = (props) => {
  const prettyName = props.player.first_name + " " + props.player.last_name;

  return(
    <React.Fragment>
        <tr className="fighter-table-list-item">
          <td className="fighter-table-fighter-name">{prettyName}</td>
          <td className="fighter-taboe-fighter-weightclass">{props.player.weight_class}</td>
        </tr>
    </React.Fragment>


  )
}

export default ListItem;
