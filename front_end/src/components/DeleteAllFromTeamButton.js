import React from 'react';

const DeleteAllFromTeamButton = () => {
  const deleteTeamURL = "http://localhost:3001/api/teams"

  const deleteAllFromTeam = () => {
    fetch(deleteTeamURL,
      {method: 'delete'})
      .then(console.log('deleted'))
    }

    return(
      <React.Fragment>
        <input type="submit"
          value="Delete All"
          onClick={deleteAllFromTeam}
        />
      </React.Fragment>
    )
  }

  export default DeleteAllFromTeamButton
