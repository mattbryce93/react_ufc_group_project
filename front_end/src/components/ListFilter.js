import React, { Component } from 'react';

class ListFilter extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputString: ""
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.callFilterCreation = this.callFilterCreation.bind(this);
  }

  callFilterCreation(){
    this.props.handleFilterCreation(this.state.inputString)
  }

  handleFilterChange(event){
    event.preventDefault();
    this.setState({inputString: event.target.value}, this.callFilterCreation);
    // this.props.handleFilterCreation(this.state.inputString)
  }


  render() {
    return(
      <React.Fragment>
        <form className="searchFilter">
          <input type="text"
            placeholder="Search for your fighter"
            value={this.state.inputString}
            onChange={this.handleFilterChange}/>
          </form>
        </React.Fragment>
      )
    }
  }

  export default ListFilter;
