import React from 'react'

const DeleteOneFromTeamButton = () => {

  const handleDeleteOneClick = () => {
    console.log("the delete one button has been clicked!");
  }

  return(
    <React.Fragment>
      <input type="submit"
        value="Remove from team"
        onClick={handleDeleteOneClick}
        className="teamListItem-delete-one"
        // styling for this in teamlistitem.css
      />
    </React.Fragment>
  )
}

export default DeleteOneFromTeamButton
