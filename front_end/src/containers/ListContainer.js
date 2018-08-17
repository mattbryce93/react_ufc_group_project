import React, { Component } from 'react';
import _ from 'lodash';
import List from '../components/List';
import ListFilter from '../components/ListFilter';

class ListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      filteredItems: null
    }
    this.handleFilterCreation = this.handleFilterCreation.bind(this);
    this.getWeightClasses = this.getWeightClasses.bind(this);
  }

  handleFilterCreation(filter){
    const allItems = this.props.allPlayers;
    const filteredItems = _.filter(allItems, function(fighter){
      return _.includes(fighter.first_name.toLowerCase(), filter.toLowerCase());
    });
    this.setState({filteredItems});
  }

  getWeightClasses(){
    const allUniqByWeight = _.uniqBy(this.props.allPlayers, 'weight_class');
    const allWeights = _.map(allUniqByWeight, fighter => {
      return fighter.weight_class
    })
    return allWeights;
  }

  render(){
    let generatedList = <List listedPlayers={this.props.allPlayers}/>;
    if(this.state.filteredItems){
      generatedList = <List listedPlayers={this.state.filteredItems}/>;
    }
    return(

      <React.Fragment>
        <p>ListContainer</p>
        <ListFilter handleFilterCreation={this.handleFilterCreation} weights={this.getWeightClasses}/>
        {generatedList}
      </React.Fragment>
    )
  }
}

export default ListContainer;
