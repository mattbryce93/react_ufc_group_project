import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  if(!props.listedPlayers){
    return null;
  }

  const allListItems = props.listedPlayers.map((player, index) => {
    return <ListItem player={player} index={index} key={index}/>
  })

  return(
    <React.Fragment>
      <table className="fighter-table">
        <tbody>
          <tr className="fighter-table-header">
            <th>Name</th>
            <th>Weight class</th>
          </tr>
          {allListItems}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default List;
