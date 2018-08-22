import React from 'react';
import TeamListItem from '../components/TeamListItem'
import DeleteAllFromTeamButton from '../components/DeleteAllFromTeamButton'
import './TeamList.css'

const TeamList = (props) => {
<<<<<<< HEAD
  console.log(props);

  const allTeamFighterItems = props.allTeamFighters.map((fighter, index) => {
    return <TeamListItem
      fighter={fighter}
      index={index}
      key={index}
      handleDeleteOneButton = {props.handleDeleteOneButton}
      handleClicked={props.handleClicked}

    />
  })
=======
  let allTeamFighterItems = null;

  if (props.allTeamFighters.length === 0){
    allTeamFighterItems = <p className="empty-team-message">Fighters List Empty</p>
  } else {
    allTeamFighterItems = props.allTeamFighters.map((fighter, index) => {
      return <TeamListItem
        fighter={fighter}
        index={index}
        key={index}
        handleDeleteOneButton = {props.handleDeleteOneButton}
      />
    })
  }

>>>>>>> develop

  return(
    <React.Fragment>
      <div className="team-elements">
        <div className="teamList-header">
          <h4>Your team</h4>
          <div className="teamList-ptsContainer">
            {`${props.teamScore} pts`}
          </div>
        </div>
        {allTeamFighterItems}
        <DeleteAllFromTeamButton
          handleDeleteAllButton={props.handleDeleteAllButton}
          handleClicked={props.handleClicked}
        />
      </div>

    </React.Fragment>
  )
}

export default TeamList;
