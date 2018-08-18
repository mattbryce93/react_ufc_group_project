import React, { Component } from 'react';
import SelectedPlayer from '../components/SelectedPlayer'

class PlayerContainer extends Component{
  render(){
    return(
      <React.Fragment>
        <p>PlayerContainer</p>
        <SelectedPlayer/>
      </React.Fragment>

    )
  }
}

export default PlayerContainer;
