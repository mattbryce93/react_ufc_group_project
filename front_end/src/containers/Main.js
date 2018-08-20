import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Title from '../components/Title'
import NavBar from '../components/NavBar'
import TeamContainer from './TeamContainer'
import "./Main.css"


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      allFighters: []
    }
    this.apiCall = this.apiCall.bind(this);
  }

  componentDidMount(){
    this.apiCall();
  }

  apiCall() {
    fetch('http://localhost:3001/api/fighters')
    .then(response => response.json())
    // .then(
    .then(fighters => this.setState({
      allFighters: fighters
      .filter(fighter => fighter.fighter_status === 'Active'
      && fighter.first_name !== '...'
      && fighter.first_name !== '.')
    })
  )
}

render(){
  return(
    <React.Fragment>
      <NavBar/>
      <Title/>
      <TeamContainer/>
      <div className="search-container">
        {/* <p>Main</p> */}
        <ListContainer allFighters={this.state.allFighters}/>
      </div>
    </React.Fragment>
  )
}
}

export default Main;
