import React from 'react';
import ListFilter from './ListFilter';
import ListItem from './ListItem';

const List = (props) => {
  if(!props.listedPlayers){
    return null;
  }

  const allListItems = props.listedPlayers.map((player, index) => {
    return <ListItem player={player} index={index}/>
  })

  return(
    <React.Fragment>
      <p>List</p>
      {allListItems}
    </React.Fragment>
  )
}

export default List;
