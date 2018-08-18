import React from 'react';

const ListFilter = () => {
  return(

    <p>ListFilter</p>
  )
}
// handling text changes
  handleFilterChange(event){
    event.preventDefault();
    this.setState({inputString: event.target.value}, this.callFilterCreation);
    // this.props.handleFilterCreation(this.state.inputString)
  }

  callFilterCreation(){
    this.props.handleFilterCreation(this.state.inputString)
  }

  // handling weight changes
  handleWeightSelectorChange(event){
    // console.log(event.target.value);
    this.props.onWeightSelected(event.target.value);
  }

  //generate drop down values
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
            <select
              name="weightclass-selector"
              id="weightclass-selector"
              onChange={this.handleWeightSelectorChange}>
              {this.generateWeights()}
            </select>
          </form>
        </React.Fragment>
      )
    }
  }

  export default ListFilter;
