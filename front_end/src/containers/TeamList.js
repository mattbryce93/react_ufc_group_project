import React from 'react';
import TeamItem from '../components/TeamItem'
import DeleteAllFromTeamButton from '../components/DeleteAllFromTeamButton'

const TeamList = (props) => {

  const allTeamFighterItems = props.allTeamFighters.map((fighter, index) => {
    return <li id={fighter} index={index} key={index}>{fighter.first_name}</li>
  })

  return(
    <React.Fragment>
      <p>Team List</p>
      <TeamItem/>
      <ol>
        {allTeamFighterItems}
      </ol>
      <DeleteAllFromTeamButton />
    </React.Fragment>
  )
}

export default TeamList;
