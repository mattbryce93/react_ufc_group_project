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
