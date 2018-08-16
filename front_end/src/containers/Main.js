import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Title from '../components/Title'
import NavBar from '../components/NavBar'
import TeamContainer from './TeamContainer'

class Main extends Component{
  render(){
    return(
      <React.Fragment>
        <NavBar/>
        <Title/>
        <p>Main</p>
        <TeamContainer/>
        <ListContainer/>
      </React.Fragment>
    )
  }
}

export default Main;
