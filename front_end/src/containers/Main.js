import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Title from '../components/Title'
import NavBar from '../components/NavBar'
import TeamContainer from './TeamContainer';
import FighterContainer from './FighterContainer';
import "./Main.css"


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      allFighters: [],
      selectedFighter: null
    }
    this.apiCall = this.apiCall.bind(this);
    this.handleFighterSelect = this.handleFighterSelect.bind(this);
    this.hideSelectedPlayer = this.hideSelectedPlayer.bind(this);
    this.hideListContainer = this.hideListContainer.bind(this);
  }

  componentDidMount(){
    this.apiCall();
  }

  handleFighterSelect(event){
    this.setState({selectedFighter: event.target.id})
  }

  hideSelectedPlayer(){
    this.setState({selectedFighter: null})
  }

  apiCall() {
    fetch('http://localhost:3001/api/fighters')
    .then(response => response.json())
    .then(fighters => this.setState({
      allFighters: fighters
      .filter(fighter => fighter.fighter_status === 'Active'
      && fighter.first_name !== '...'
      && fighter.first_name !== '.')
    })
  )
}

  hideListContainer(){
    if(!this.state.selectedFighter){
      return(
        <div className="search-container">
          <ListContainer allFighters={this.state.allFighters} handleFighterSelect={this.handleFighterSelect}/>
        </div>
      )
    }
    return (
      <FighterContainer selectedFighter={this.state.selectedFighter} hideSelectedPlayer={this.hideSelectedPlayer}/>
    )
  }



render(){
  return(
    <React.Fragment>
      <NavBar/>
      <Title/>
      <TeamContainer/>
      {this.hideListContainer()}
    </React.Fragment>
  )

}
}

export default Main;
