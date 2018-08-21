import React from 'react';
import _ from 'lodash';
import './ListItem.css'


const AddToTeamButton = (props) => {

  const playerTeamURL = "http://localhost:3001/api/teams";
  const selectedFighter = props.fighter;
  // const playerTeamName = "player_team";

  const getAllTeams = () => {
    return fetch(playerTeamURL)
    .then(response => response.json())
    .then(response => {
      return response;
    })
  }

  const filterDBToPlayerTeam = (json) => {
    const filteredArray = _.filter(json, 'player_team');
    return filteredArray;
  }

  const handleSubmitClick = () => {
    const data = getAllTeams();
    data
    .then(function(result){
      addSelectedFighterIdToPlayerTeam(filterDBToPlayerTeam(result));
    })

  };

  const filterIf = (playerTeam) => {
    const array = playerTeam[0].player_team;
    let fighterIDToCheck = selectedFighter.id;

    for (let fighter of array){
      if (fighter.id === fighterIDToCheck)
      return false;
    } return true;
  }

  const addSelectedFighterIdToPlayerTeam = (playerTeam) => {
    if (playerTeam[0].player_team.length < 4 && filterIf(playerTeam) ){
    const newTeamArray = playerTeam[0].player_team;
    newTeamArray.push(selectedFighter);

    const newTeam = {"player_team": newTeamArray};


    const existingDBTeamId = playerTeam[0]._id;
    const deleteExistingTeamURL = `http://localhost:3001/api/teams/${existingDBTeamId}`;
    deleteTeam(deleteExistingTeamURL);
    saveTeam(newTeam);
    }
  }

  // const createNewTeam

  const saveTeam = (teamData) => {

    fetch("http://localhost:3001/api/teams", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(teamData), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(json => props.handleAddToTeamButton()) // parses response to JSON
  }

  const deleteTeam = (url) => {
    fetch(url, {
      method: 'delete'
    })
  }

  return(
    <React.Fragment>
      <input type="submit"
        value="Add to team"
        onClick={handleSubmitClick}
        className={`fighterTable-list-item-addToTeam-BUTTON-${props.inTeam}`}
        // styling in ListItem.css
      />
    </React.Fragment>
    // First get existing team into variable
    // Concat player.id to existing team variable
    // Delete exisitng team from db
    // Post newly constructed team to db
  )
}

export default AddToTeamButton;
