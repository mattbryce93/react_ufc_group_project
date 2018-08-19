import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  if(!props.listedFighters){
    return null;
  }

  const allListItems = props.listedFighters.map((fighter, index) => {
    return <ListItem fighter={fighter} index={index} key={index}/>
  })

  return(
    <React.Fragment>
      <table className="fighterTable">
        <tbody>
          <tr className="fighterTable-header">
            {/* First th is blank as this is the thumbnail image column */}
            <th></th>
            <th>Name</th>
            <th>Weight class</th>
          </tr>
          {allListItems}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default List;
