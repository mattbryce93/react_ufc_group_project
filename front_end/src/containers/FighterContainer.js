import React, { Component } from 'react';
import SelectedFighter from '../components/SelectedFighter'
import './FighterContainer.css'

class FighterContainer extends Component{
  render(){
    if(!this.props.selectedFighter){
      return null;
    }
    return(
      <React.Fragment>

        <p>FighterContainer</p>
        <div className="fighter-container">
        <SelectedFighter selectedFighter={this.props.selectedFighter} hideSelectedPlayer={this.props.hideSelectedPlayer}/>
      </div>

      </React.Fragment>

    )
  }
}

export default FighterContainer;
