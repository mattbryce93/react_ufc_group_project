import React from 'react';
import ListFilter from './ListFilter';
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
      <h4>Player search</h4>
      <table className="fighter-table">
        <tbody>
          {allListItems}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default List;
