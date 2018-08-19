import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Title from '../components/Title'
import NavBar from '../components/NavBar'
import TeamContainer from './TeamContainer'



class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      allFighters: []
  }
  this.apiCall = this.apiCall.bind(this);
}

  componentDidMount(){
    this.apiCall();
  }

  apiCall() {
    fetch('http://localhost:3001/api/fighters')
    .then(response => response.json())
    .then(fighters => this.setState({allFighters: fighters}))
  }

  render(){
    return(
      <React.Fragment>
        <NavBar/>
        <Title/>
        {/* <p>Main</p> */}
        <TeamContainer/>
        <ListContainer allFighters={this.state.allFighters}/>
      </React.Fragment>
    )
  }
}

export default Main;
