import React from 'react';
import _ from 'lodash';

const AddToTeamButton = (props) => {

  const playerTeamURL = "http://localhost:3001/api/teams";
  const playerTeamName = "player_team";

  const handleSubmitClick = () => {
    const data = getAllTeams();
    data.then(function(result){
      console.log(filterDBWithTeamName(result));
    })
  };

  const getAllTeams = () => {
    return fetch(playerTeamURL)
    .then(response => response.json())
    .then(response => {
      return response;
    })
  }

  const filterDBWithTeamName = (json) => {
    // const filteredArray = _.find(json, 'player_team');
    const filteredArray = _.map(json, "player_team");
    // console.log(filteredArray);
    return filteredArray;
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
