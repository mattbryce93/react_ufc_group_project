import React from 'react';
import _ from 'lodash';


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
    .then(props.handleAddToTeamButton());
  };

  const addSelectedFighterIdToPlayerTeam = (playerTeam) => {
    const newTeamArray = playerTeam[0].player_team;
    newTeamArray.push(selectedFighter);

    const newTeam = {"player_team": [newTeamArray]};
    saveTeam(newTeam);

    const existingDBTeamId = playerTeam[0]._id;
    const deleteExistingTeamURL = `http://localhost:3001/api/teams/${existingDBTeamId}`;
    deleteTeam(deleteExistingTeamURL);
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
    .then(response => response.json()); // parses response to JSON
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
      />
    </React.Fragment>
    // First get existing team into variable
    // Concat player.id to existing team variable
    // Delete exisitng team from db
    // Post newly constructed team to db
  )
}

export default AddToTeamButton;
