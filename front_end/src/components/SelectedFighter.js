import React, {Component} from 'react';

class SelectedFighter extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFighter: null
    }
    this.fetchFighterObject = this.fetchFighterObject.bind(this);
  }

  fetchFighterObject(){
    const url = `http://localhost:3001/api/fighters/${this.props.selectedFighter}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(fighter => this.setState({
          selectedFighter: fighter
        })
      )
  }

  componentDidMount(){
    this.fetchFighterObject();
  }

//   apiCall() {
//     fetch('http://localhost:3001/api/fighters')
//     .then(response => response.json())
//     // .then(
//     .then(fighters => this.setState({
//       allFighters: fighters
//       .filter(fighter => fighter.fighter_status === 'Active'
//       && fighter.first_name !== '...'
//       && fighter.first_name !== '.')
//     })
//   )
// }

  render(){
    return(
      <React.Fragment>
        <p>Selected Fighter</p>
        <p>{this.props.selectedFighter}</p>
        <button onClick={this.props.hideSelectedPlayer}>Back to List</button>
      </React.Fragment>
    )
  }
}

export default SelectedFighter;
