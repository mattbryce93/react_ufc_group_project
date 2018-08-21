import React from 'react';
import TeamListItem from '../components/TeamListItem'
import DeleteAllFromTeamButton from '../components/DeleteAllFromTeamButton'
import './TeamList.css'

const TeamList = (props) => {

  const allTeamFighterItems = props.allTeamFighters.map((fighter, index) => {
    return <TeamListItem
      fighter={fighter}
      index={index}
      key={index}/>
    })

    return(
      <React.Fragment>
        <div className="team-elements">
          <div className="teamList-header">
            <h4>Your chosen team</h4>
          </div>
          {allTeamFighterItems}
          <DeleteAllFromTeamButton />
        </div>

      </React.Fragment>
    )
  }

  export default TeamList;
