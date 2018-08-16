import React, { Component } from 'react';
import List from '../components/List';
import ListFilter from '../components/ListFilter';

class ListContainer extends Component{
  render(){
    return(
      <React.Fragment>
        <p>ListContainer</p>
        <ListFilter/>
        <List/>
      </React.Fragment>
    )
  }
}

export default ListContainer;
