import React, { Component } from 'react';
import _ from 'lodash';
import List from '../components/List';
import ListFilter from '../components/ListFilter';
import './ListContainer.css'

class ListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      filteredFighters: null,
      textFilter: null,
      weightFilter: null,
      titleFilter: null
    }
    this.handleSearchBoxFilter = this.handleSearchBoxFilter.bind(this);
    this.getWeightClasses = this.getWeightClasses.bind(this);
    this.handleWeightClassFilter = this.handleWeightClassFilter.bind(this);
    this.processFiltering = this.processFiltering.bind(this);
    this.handleTitleFilter = this.handleTitleFilter.bind(this);
  }

  handleSearchBoxFilter(searchBoxFilter){
    this.setState({textFilter: searchBoxFilter}, this.processFiltering)
  }

  handleWeightClassFilter(weightClassFilter){
    this.setState({weightFilter: weightClassFilter}, this.processFiltering)
  }

  handleTitleFilter(titleFilter){
    this.setState({titleFilter: titleFilter}, this.processFiltering)
  }

  processFiltering(){
    let filteredFighters = this.props.allFighters;

    if(this.state.textFilter){
      //incorporate first and last name filtering here
      let textArray = this.state.textFilter.split(' ');
      filteredFighters = _.filter(filteredFighters, (fighter) => {
        return _.includes(fighter.first_name.toLowerCase(), textArray[0].toLowerCase());
      });
      if(textArray.length > 1){
        filteredFighters = _.filter(filteredFighters, (fighter) => {
          return _.includes(fighter.last_name.toLowerCase(), textArray[1].toLowerCase());
        });
      }
    }

    if(this.state.weightFilter){
      filteredFighters = _.filter(filteredFighters, {'weight_class': this.state.weightFilter});
    }

    //if statement for titlefilter

    if(this.state.titleFilter){
      // console.log(this.state.titleFilter);
      if(this.state.titleFilter === 'true'){
        filteredFighters = _.filter(filteredFighters, {'title_holder': true});
      }
      if(this.state.titleFilter === 'false'){
        filteredFighters = _.filter(filteredFighters, {'title_holder': false});
      }
    }

    this.setState({filteredFighters});
  }

  //generating weight classes

  getWeightClasses(){
    const allUniqByWeight = _.uniqBy(this.props.allFighters, 'weight_class');
    const allWeights = _.map(allUniqByWeight, fighter => {
      return fighter.weight_class
    })
    return allWeights;
  }

  render(){
    let generatedList = <List
      listedFighters={this.props.allFighters}
      handleFighterSelect={this.props.handleFighterSelect}
      handleAddToTeamButton={this.props.handleAddToTeamButton}
    />;
    if(this.state.filteredFighters){
      generatedList = <List
        listedFighters={this.state.filteredFighters}
        handleFighterSelect={this.props.handleFighterSelect}
        handleAddToTeamButton={this.props.handleAddToTeamButton}
      />;
    }
    return(
      <React.Fragment>
        <div className="list-container">
          <ListFilter
            handleSearchBoxCreation={this.handleSearchBoxFilter}
            weights={this.getWeightClasses}
            onWeightSelected={this.handleWeightClassFilter}
            onTitleSelected={this.handleTitleFilter}/>
            {generatedList}
          </div>
        </React.Fragment>

      )
    }
  }

  export default ListContainer;
