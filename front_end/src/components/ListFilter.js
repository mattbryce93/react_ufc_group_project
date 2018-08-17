import React, { Component } from 'react';
import _ from 'lodash';

class ListFilter extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputString: ""
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.callFilterCreation = this.callFilterCreation.bind(this);
    this.generateWeights = this.generateWeights.bind(this);
  }

  callFilterCreation(){
    this.props.handleFilterCreation(this.state.inputString)
  }

  handleFilterChange(event){
    event.preventDefault();
    this.setState({inputString: event.target.value}, this.callFilterCreation);
    // this.props.handleFilterCreation(this.state.inputString)
  }

  generateWeights(){
    const allWeights = this.props.weights();
    const weightOptions = _.map(allWeights, weight =>{
      return <option value={weight}>{weight}</option>
    })
    return weightOptions;
  }


  render() {
    return(
      <React.Fragment>
        <form className="searchFilter">
          <input type="text"
            placeholder="Search for your fighter"
            value={this.state.inputString}
            onChange={this.handleFilterChange}/>
            <select>
              {this.generateWeights()}
            </select>
          </form>
        </React.Fragment>
      )
    }
  }

  export default ListFilter;
