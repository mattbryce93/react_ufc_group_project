import React, { Component } from 'react';
import List from '../components/List';
import ListFilter from '../components/ListFilter';

class ListContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      filteredItems: null,
      textFilter: null,
      weightFilter: null
      // weightFiltered: false
    }
    this.handleSearchBoxFilter = this.handleSearchBoxFilter.bind(this);
    this.getWeightClasses = this.getWeightClasses.bind(this);
    this.handleWeightClassFilter = this.handleWeightClassFilter.bind(this);
    this.processFiltering = this.processFiltering.bind(this);
  }

  handleSearchBoxFilter(searchBoxFilter){
    this.setState({textFilter: searchBoxFilter}, this.processFiltering)
  }

  handleWeightClassFilter(weightClassFilter){
    this.setState({weightFilter: weightClassFilter}, this.processFiltering)
  }

  processFiltering(){
    let filteredItems = this.props.allPlayers;
    if(this.state.textFilter){
      //incorporate first and last name filtering here
      let textArray = this.state.textFilter.split(' ');
      filteredItems = _.filter(filteredItems, (fighter) => {
        return _.includes(fighter.first_name.toLowerCase(), textArray[0].toLowerCase());
      });
      if(textArray.length > 1){
        filteredItems = _.filter(filteredItems, (fighter) => {
          return _.includes(fighter.last_name.toLowerCase(), textArray[1].toLowerCase());
        });
      }
    }
    if(this.state.weightFilter){
      filteredItems = _.filter(filteredItems, {'weight_class': this.state.weightFilter});
    }
    this.setState({filteredItems});
  }


 

  //generating weight classes

  getWeightClasses(){
    const allUniqByWeight = _.uniqBy(this.props.allPlayers, 'weight_class');
    const allWeights = _.map(allUniqByWeight, fighter => {
      return fighter.weight_class
    })
    return allWeights;
  }

  render(){
    return(
      <React.Fragment>
        <p>ListContainer</p>
        <ListFilter/>
        <List allPlayers={this.props.allPlayers}/>
      </React.Fragment>
    )
  }
}

export default ListContainer;
