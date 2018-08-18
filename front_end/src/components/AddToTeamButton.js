import React from 'react';

const AddToTeamButton = (props) => {

  const playerTeamURL = "http://localhost:3001/api/team"

  function handleSubmitClick() {
    console.log("I have been clicked!");
  };

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
