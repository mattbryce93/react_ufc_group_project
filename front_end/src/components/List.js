import React from 'react';
import ListFilter from './ListFilter';
import ListItem from './ListItem';

const List = (props) => {
  return(
    <React.Fragment>
      <p>List</p>
      <ListFilter/>
      <ListItem/>
    </React.Fragment>
  )
}

export default List;
