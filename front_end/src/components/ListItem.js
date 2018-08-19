import React from 'react';

const ListItem = (props) => {
  const prettyName = props.fighter.first_name + " " + props.fighter.last_name;

  return(
    <React.Fragment>
        <tr className="fighter-table-list-item">
          <td className="fighter-table-fighter-name">{prettyName}</td>
          <td className="fighter-table-fighter-weightclass">{props.fighter.weight_class}</td>
        </tr>
    </React.Fragment>


  )
}

export default ListItem;
