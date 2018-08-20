import React from 'react';
import _ from 'lodash';

const DeleteOneFromTeamButton = (props) => {

  const id = props.id;
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

  const handleDeleteOneClick = () => {
    const data = getAllTeams();
    data
    .then(function(result){
      deleteFighterFromPlayerTeam(filterDBToPlayerTeam(result), id);
    })
  };

  const deleteFighterFromPlayerTeam = (playerTeam, id) => {
    const fighterList = playerTeam[0].player_team;
    const newFighterList = _.dropWhile(fighterList, (fighter) => {
      return id === fighter.id
    })
    const newTeam = {"player_team": newFighterList}
    saveTeam(newTeam);

    const existingDBTeamId = playerTeam[0]._id;
    const deleteExistingTeamURL = `http://localhost:3001/api/teams/${existingDBTeamId}`;
    deleteTeam(deleteExistingTeamURL);
  }

  const saveTeam = (teamData) => {

    fetch("http://localhost:3001/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(teamData),
    })
    .then(response => response.json());
  }

  const deleteTeam = (url) => {
    fetch(url, {
      method: 'delete'
    })
  }

  return(
    <React.Fragment>
      <input type="submit"
        value="Remove from team"
        onClick={handleDeleteOneClick}
        className="teamListItem-delete-one"
      />
    </React.Fragment>
  )
}

export default DeleteOneFromTeamButton
