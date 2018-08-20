import React from 'react';
import TeamItem from '../components/TeamItem'

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
    </React.Fragment>
  )
}

export default TeamList;
