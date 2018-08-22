import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import AddToTeamButton from './AddToTeamButton';
import "./ListItem.css";
import _ from 'lodash';

class ListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      inTeam: false
    }

    this.handleFilteringAddToTeamButton = this.handleFilteringAddToTeamButton.bind(this);
    this.prettyWeight = this.prettyWeight.bind(this);
    this.currentTeam = props.currentTeam;
    this.fighterID = props.fighter.id;
    this.handleClick = this.handleClick.bind(this);
  }

  handleFilteringAddToTeamButton(){
     // let fighterFoundInTeam = false;
     let fighterFound = false;


     _.forEach(this.currentTeam, function(teamFighter) {
       if (teamFighter.id === this.fighterID)
       {
         fighterFound = true;
         this.setState({inTeam: true})
         // console.log(`${this.fighterID} is present`);
         return ;
       }
     }.bind(this))
     // console.log(fighterFound);
     return fighterFound;
     // componentDidMount
     // setState(fighterFound) (starts false)
     // handleState function to return string
   }

   componentDidMount(){
     this.handleFilteringAddToTeamButton();
   }

     //
     // const handleClassName = () => {
     //   let isPlayerInTeam = this.props.handleFilteringAddToTeamButton;
     //   if(isPlayerInTeam === true){
     //     return "fighterTable-list-item-addToTeam-BUTTON";
     //   } else {
     //     return "fighterTable-list-item-addToTeam-BUTTON-INVISIBLE";
     //   }
     //   console.log(isPlayerInTeam);
     // }

  prettyWeight(){
    if(!this.props.fighter.weight_class){
      return null;
    }
    let prettyWeight = this.props.fighter.weight_class.split('_');
    return prettyWeight.join(' ');
  }

  handleClick() {
    this.setState({inTeam: true});
    console.log('Clicky click');
  }

  render(){

    const prettyName = this.props.fighter.first_name + " " + this.props.fighter.last_name;
    const thumbnailImg =
      <LazyLoad height={100}>
        <img id={this.props.fighter.id}
        className="fighterTable-fighter-thumbnail"
        src={this.props.fighter.profile_image}
        alt={prettyName}/>
      </LazyLoad>;

      return(
        <React.Fragment>
          <tr className="fighterTable-list-item" onClick={this.props.handleFighterSelect}>
            <td id={this.props.fighter.id}>{thumbnailImg}</td>
            <td id={this.props.fighter.id} className="fighterTable-fighter-name">{prettyName}</td>
            <td id={this.props.fighter.id} className="fighterTable-fighter-weightclass">{this.prettyWeight()}</td>
            <td id={this.props.fighter.id} className="fighterTable-fighter-W">{this.props.fighter.wins}</td>
            <td id={this.props.fighter.id} className="fighterTable-fighter-L">{this.props.fighter.losses}</td>
            <td id={this.props.fighter.id} className="fighterTable-fighter-D">{this.props.fighter.draws}</td>

            <td className="fighterTable-addToTeamButton">
              <AddToTeamButton
                handleClick={this.handleClick}
                fighter={this.props.fighter}
                handleAddToTeamButton={this.props.handleAddToTeamButton}
                inTeam={this.state.inTeam}/>
              </td>
            </tr>
          </React.Fragment>
        )
      }
    }

    export default ListItem;
