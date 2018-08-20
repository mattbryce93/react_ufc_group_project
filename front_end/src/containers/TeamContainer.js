import React from 'react';
import TeamList from './TeamList'
// import DeleteAllButton from

const TeamContainer = (props) => {

  return(
    <React.Fragment>
      {/* <p>TeamContainer</p> */}
      <TeamList allTeamFighters={props.allTeamFighters}/>
    </React.Fragment>
  )
}

export default TeamContainer;
