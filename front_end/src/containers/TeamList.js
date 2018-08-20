import React from 'react';
import TeamListItem from '../components/TeamListItem'
import DeleteAllFromTeamButton from '../components/DeleteAllFromTeamButton'

const TeamList = (props) => {

  const allTeamFighterItems = props.allTeamFighters.map((fighter, index) => {
    return <TeamListItem
      fighter={fighter}
      index={index}
      key={index}/>
  })

  return(
    <React.Fragment>
      <p>Team List</p>
        {allTeamFighterItems}
      <DeleteAllFromTeamButton />
    </React.Fragment>
  )
}

export default TeamList;
