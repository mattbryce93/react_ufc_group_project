import React, { Component } from 'react';
import _ from 'lodash';

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
      return <option value={weight} key={weight}>{weight}</option>
    })
    return weightOptions;
  }

  render() {
    return(
      <React.Fragment>
        <div className="filter-box">
          <form className="all-filters">
            <input type="text"
              placeholder="Search for your fighter"
              value={this.state.inputString}
              onChange={this.handleTextSearchChange}/>
              <select
                name="weightclass-selector"
                id="weightclass-selector"
                onChange={this.handleWeightSelectorChange}>
                {this.generateWeights()}
              </select>
              {/* //tick box */}
              <p>All: </p>
              <input type="radio" name="title" value={undefined} onChange={this.handleTitleSelection}/>
              <p>Yes: </p>
              <input type="radio" name="title" value={true} onChange={this.handleTitleSelection}/>
              <p>No: </p>
              <input type="radio" name="title" value={false} onChange={this.handleTitleSelection}/>
            </form>
          </div>
        </React.Fragment>
      )
    }
  }

  export default ListFilter;
