import React, {Component} from 'react';
import AddToTeamButton from './AddToTeamButton';
import "./ListItem.css";
import _ from 'lodash';

class ListItem extends Component{
  constructor(props){
    super(props);

    this.handleFilteringAddToTeamButton = this.handleFilteringAddToTeamButton.bind(this);

    this.currentTeam = props.currentTeam;
    this.fighterID = props.fighter.id;
  }

  handleFilteringAddToTeamButton(){

    const fighterFoundInTeam = false;

    _.forEach(this.currentTeam, function(teamFighter) {

      if (teamFighter.id === this.fighterID)
      {
        let fighterFound = true;
        console.log("if true: " + fighterFound);
        return fighterFound;
      } else {
        let fighterFound = false;
        console.log("if false: " + fighterFound);
      }

    }.bind(this))

    console.log(fighterFoundInTeam);
    return;
  }

  // componentDidMount(){
  //   // this.getAllTeams();
  //   // this.displayAddToTeamButton();
  // }

  render(){

    const prettyName = this.props.fighter.first_name + " " + this.props.fighter.last_name;
    const thumbnailImg = <img id={this.props.fighter.id}
      className="fighterTable-fighter-thumbnail"
      src={this.props.fighter.profile_image}
      alt={prettyName}/>;

    return(
      <React.Fragment>
        <tr className="fighterTable-list-item" onClick={this.props.handleFighterSelect}>
          <td id={this.props.fighter.id}>{thumbnailImg}</td>
          <td id={this.props.fighter.id} className="fighterTable-fighter-name">{prettyName}</td>
          <td id={this.props.fighter.id} className="fighterTable-fighter-weightclass">{this.props.fighter.weight_class}</td>

          <td className="fighterTable-addToTeamButton">
            <AddToTeamButton
              handleFilteringAddToTeamButton={this.handleFilteringAddToTeamButton}
              fighter={this.props.fighter}
              handleAddToTeamButton={this.props.handleAddToTeamButton}/>
            </td>
          </tr>
        </React.Fragment>
      )
    }
  }

  export default ListItem;
