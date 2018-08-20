import React, {Component} from 'react';

class SelectedFighter extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFighter: null
    }
    this.fetchFighterObject = this.fetchFighterObject.bind(this);
    this.prettyName = this.prettyName.bind(this);
    this.getAge = this.getAge.bind(this);
  }

  fetchFighterObject(){
    const url = `http://localhost:3001/api/fighters/${this.props.selectedFighter}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(fighter => this.setState({
          selectedFighter: fighter
        })
      )
  }

  componentDidMount(){
    this.fetchFighterObject();
  }

  prettyName(){
    if(!this.state.selectedFighter){
      return null;
    }
    if(!this.state.selectedFighter.nickname){
      return(
        <p>Name: {this.state.selectedFighter.first_name} {this.state.selectedFighter.last_name}</p>
      )
    }
    return(
      <p>Name: {this.state.selectedFighter.first_name} "{this.state.selectedFighter.nickname}" {this.state.selectedFighter.last_name}</p>
    )
  }

  getAge(){
    if(!this.state.selectedFighter){
      return null;
    }
    const currentDate = new Date();
    const fightersDOB = new Date(this.state.selectedFighter.dob);
    const parsedCurrentDate = Date.parse(currentDate);
    const parsedFightersDOB = Date.parse(fightersDOB);
    const age_millseconds = parsedCurrentDate - parsedFightersDOB
    const age = parseInt(age_millseconds/(1000 * 60 * 60 * 24 * 365.25));
    return (<p>Age: {age}</p>);
  }

  render(){
    return(
      <React.Fragment>
        <p>Selected Fighter</p>
        {this.prettyName()}
        {this.getAge()}
        <button onClick={this.props.hideSelectedPlayer}>Back to List</button>
      </React.Fragment>
    )
  }
}

export default SelectedFighter;
