import React, { Component } from 'react';
import List from '../components/List';
import ListFilter from '../components/ListFilter';

class ListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      filteredItems: []
    }
    this.handleFilterCreation = this.handleFilterCreation.bind(this);
  }

  handleFilterCreation(filter){
    // console.log("Running handleFilterCreation");
    console.log("passed in state:");
    console.log(filter);
  }

  render(){
    return(
      <React.Fragment>
        <p>ListContainer</p>
        <ListFilter handleFilterCreation={this.handleFilterCreation}/>
        <List allPlayers={this.props.allPlayers}/>
      </React.Fragment>
    )
  }
}

export default ListContainer;
