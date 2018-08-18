import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Title from '../components/Title'
import NavBar from '../components/NavBar'
import TeamContainer from './TeamContainer';
import PlayerContainer from './PlayerContainer';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      allPlayers: [],
      selectedPlayer: null
  }
  this.apiCall = this.apiCall.bind(this);
}

  componentDidMount(){
    this.apiCall();
  }

  apiCall() {
    fetch('http://localhost:3001/api/fighters')
    .then(response => response.json())
    .then(fighters => this.setState({allPlayers: fighters}))
  }


  // <Route path="/player" component={PlayerContainer}/>
  render(){
    return(
      <React.Fragment>
        <NavBar/>
        <Title/>
        <p>Main</p>
        <TeamContainer/>
        <PlayerContainer selectedPlayer={this.state.selectedPlayer}/>
        <ListContainer allPlayers={this.state.allPlayers}/>
      </React.Fragment>

    )
  }
}

export default Main;
