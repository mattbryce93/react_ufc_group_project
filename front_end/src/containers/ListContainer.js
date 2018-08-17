import React, { Component } from 'react';
import _ from 'lodash';
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
    console.log(filter);
    const allItems = this.props.allPlayers;
    const filteredItems = _.filter(allItems, function(fighter){
      return _.includes(fighter.first_name.toLowerCase(), filter.toLowerCase());
    });
    console.log(filteredItems);
    this.setState({filteredItems}, this.createListItems);
  }

  createListItems(){
    console.log(this.state.filteredItems);
  }

render(){
  return(
    <React.Fragment>
      <p>ListContainer</p>
      <ListFilter handleFilterCreation={this.handleFilterCreation}/>
      //pass in all players as a diffrenet name maybe. which is listItems
      <List allPlayers={this.props.allPlayers}/>
    </React.Fragment>
  )
}
}

export default ListContainer;
