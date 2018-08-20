import React, { Component } from 'react';
import SelectedFighter from '../components/SelectedFighter'

class FighterContainer extends Component{
  render(){
    if(!this.props.selectedFighter){
      return null;
    }
    return(
      <React.Fragment>
        <p>FighterContainer</p>
        <SelectedFighter selectedFighter={this.props.selectedFighter} hideSelectedPlayer={this.props.hideSelectedPlayer}/>

      </React.Fragment>

    )
  }
}

export default FighterContainer;
