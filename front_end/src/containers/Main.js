import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Title from '../components/Title'
import NavBar from '../components/NavBar'
import TeamContainer from './TeamContainer';
import FighterContainer from './FighterContainer';
import Footer from './Footer';
import "./Main.css"


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      allFighters: [],
      selectedFighter: null,

      teamFighters: [],
      teamScore: 0,

    }
    this.apiCall = this.apiCall.bind(this);
    this.handleFighterSelect = this.handleFighterSelect.bind(this);
    this.hideSelectedPlayer = this.hideSelectedPlayer.bind(this);
    this.hideListContainer = this.hideListContainer.bind(this);
    this.handleAddToTeamButton = this.handleAddToTeamButton.bind(this);
    this.handleDeleteAllButton = this.handleDeleteAllButton.bind(this);
    this.handleDeleteOneButton = this.handleDeleteOneButton.bind(this);
    this.scoreKeeper = this.scoreKeeper.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
  }

  componentDidMount(){
    this.apiCall();
    this.playerTeamAPICall();

  }



  handleFighterSelect(event){
    this.setState({selectedFighter: event.target.id})
  }

  hideSelectedPlayer(){
    this.setState({selectedFighter: null})
  }

  scoreKeeper(array){
    let wins = 0;
    let losses = 0;
    // let draws = 0;

    for(let item of array){
      // console.log(item);
      // console.log(item.wins);
      wins += item.wins;
      losses += item.losses;
      // draws += item.draws;
    }
    let score = wins - losses;
    this.setState({teamScore: score})
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

playerTeamAPICall(){
  fetch('http://localhost:3001/api/teams')
  .then(response => response.json())
  .then(team => this.setState({
    teamFighters: team[0].player_team
  }))
  .then(() => this.scoreKeeper(this.state.teamFighters))
}

hideListContainer(){
  if(!this.state.selectedFighter){
    return(
      <div className="search-container">
        <ListContainer
          allFighters={this.state.allFighters}
          handleFighterSelect={this.handleFighterSelect}
          handleAddToTeamButton={this.handleAddToTeamButton}
          currentTeam={this.state.teamFighters}

        />
        </div>
      )
    }
    return (
      <FighterContainer
        selectedFighter={this.state.selectedFighter}
        hideSelectedPlayer={this.hideSelectedPlayer}
      />
    )
  }
  handleClicked(){
    let holder = this.state.allFighters
    console.log(holder);
    this.setState({allFighters: null})
    this.setState({allFighters: holder});

  }


  handleAddToTeamButton(){
    this.playerTeamAPICall();

  }

  handleDeleteAllButton(){
    this.playerTeamAPICall();

  }

  handleDeleteOneButton(){
    this.playerTeamAPICall();

  }


  render(){
    return(
      <React.Fragment>
        <NavBar/>
        <Title/>
        <TeamContainer
          allTeamFighters={this.state.teamFighters}
          handleDeleteAllButton={this.handleDeleteAllButton}
          handleDeleteOneButton={this.handleDeleteOneButton}
          handleClicked={this.handleClicked}
          teamScore={this.state.teamScore}

        />
        {this.hideListContainer()}
        <Footer/>
      </React.Fragment>
    )

  }
}

export default Main;
