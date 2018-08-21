import React from 'react';
import TeamList from './TeamList'
import './TeamContainer.css'
// import DeleteAllButton from

const TeamContainer = (props) => {

  return(
    <React.Fragment>
      <div className="team-container">
        {/* <p>TeamContainer</p> */}
        <TeamList
          allTeamFighters={props.allTeamFighters}
          handleDeleteAllButton={props.handleDeleteAllButton}
          handleDeleteOneButton={props.handleDeleteOneButton}
          teamScore={props.teamScore}
        />
      </div>
    </React.Fragment>
  )
}

export default TeamContainer;
