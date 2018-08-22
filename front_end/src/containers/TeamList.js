import React from 'react';
import TeamListItem from '../components/TeamListItem'
import DeleteAllFromTeamButton from '../components/DeleteAllFromTeamButton'
import './TeamList.css'

const TeamList = (props) => {
  let allTeamFighterItems = null;

  if (props.allTeamFighters.length === 0){
    allTeamFighterItems = <p className="empty-team-message">Fighters List is Empty</p>
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
        />
      </div>

    </React.Fragment>
  )
}

export default TeamList;
