import React, { Component } from 'react';
import SelectedFighter from '../components/SelectedFighter'

class FighterContainer extends Component{
  render(){
    return(
      <React.Fragment>
        <p>FighterContainer</p>
        <SelectedFighter/>
      </React.Fragment>

    )
  }
}

export default FighterContainer;
