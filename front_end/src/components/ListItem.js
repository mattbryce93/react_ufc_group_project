import React from 'react';

const ListItem = (props) => {
  const prettyName = props.fighter.first_name + " " + props.fighter.last_name;

  return(
    <React.Fragment>
        <tr className="fighterTable-list-item">
          <td className="fighterTable-fighter-name">{prettyName}</td>
          <td className="fighterTable-fighter-weightclass">{props.fighter.weight_class}</td>
        </tr>
    </React.Fragment>


  )
}

export default ListItem;
