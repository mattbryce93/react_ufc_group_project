import React, { Component } from 'react';
import _ from 'lodash';
import './ListFilter.css'

class ListFilter extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputString: ""
    }
    this.handleTextSearchChange = this.handleTextSearchChange.bind(this);
    this.callTextSearchCreation = this.callTextSearchCreation.bind(this);
    this.generateWeights = this.generateWeights.bind(this);
    this.handleWeightSelectorChange = this.handleWeightSelectorChange.bind(this);
    this.handleTitleSelection = this.handleTitleSelection.bind(this);
  }


  // handling text changes
  handleTextSearchChange(event){
    event.preventDefault();
    this.setState({inputString: event.target.value}, this.callTextSearchCreation);
    // this.props.handleFilterCreation(this.state.inputString)
  }

  callTextSearchCreation(){
    this.props.handleSearchBoxCreation(this.state.inputString)
  }

  // handling weight changes
  handleWeightSelectorChange(event){
    // console.log(event.target.value);
    this.props.onWeightSelected(event.target.value);
  }

  //handling title selection
  handleTitleSelection(event){
    this.props.onTitleSelected(event.target.value);
  }

  //generate weightclass drop down values
  generateWeights(){
    const allWeights = this.props.weights();
    const weightOptions = _.map(allWeights, weight => {
      if(!weight){
        return null;
      }
      return <option value={weight} key={weight}>{weight.split('_').join(' ')}</option>
    })
    return weightOptions;
  }

  render() {
    return(
      <React.Fragment>
        <div className="filter-container">
          <form id="search-form">
            <input className="searchbox" type="text"
              placeholder="Search and build your team"
              value={this.state.inputString}
              onChange={this.handleTextSearchChange}/>
            </form>
            <form id="filters-form">
              <select
                name="weightclass-selector"
                id="weightclass-selector"
                onChange={this.handleWeightSelectorChange} defaultValue="default">
                <option value="default" disabled>Filter by Weight Class</option>
                {this.generateWeights()}
              </select>
              <div className="titleHolder-radio-container">
                Title holder?
                <div className="radiobutton-container">
                  <input type="radio" name="title" value={undefined} onChange={this.handleTitleSelection}/>All
                </div>
                <div className="radiobutton-container">
                  <input type="radio" name="title" value={true} onChange={this.handleTitleSelection}/>Yes
                </div>
                <div className="radiobutton-container">
                  <input type="radio" name="title" value={false} onChange={this.handleTitleSelection}/>No
                </div>
              </div>
            </form>
          </div>
        </React.Fragment>
      )
    }
  }

  export default ListFilter;
