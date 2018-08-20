import React from 'react';
import _ from 'lodash';

const DeleteAllFromTeamButton = () => {

  const playerTeamURL = "http://localhost:3001/api/teams";


  const filterDBToPlayerTeam = (json) => {
    const filteredArray = _.filter(json, 'player_team');
    return filteredArray;
  }

  const getAllTeams = () => {
    return fetch(playerTeamURL)
    .then(response => response.json())
    .then(response => {
      return response;
    })
  }

  const handleDeleteClick = () => {
    const data = getAllTeams();
    data
    .then(function(result){
      deleteAllFightersFromPlayerTeam(filterDBToPlayerTeam(result));
    })
  };

  const deleteAllFightersFromPlayerTeam = (playerTeam) => {
    const newTeam = {"player_team": []};
    saveTeam(newTeam);

    const existingDBTeamId = playerTeam[0]._id;
    const deleteExistingTeamURL = `http://localhost:3001/api/teams/${existingDBTeamId}`;
    deleteTeam(deleteExistingTeamURL);
    console.log(playerTeam);
  }

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
        value="Delete All"
        onClick={handleDeleteClick}
        className="teamList-delete-all-BUTTON"
        // styling for this in teamlist.css
      />
    </React.Fragment>
  )
}

export default DeleteAllFromTeamButton
