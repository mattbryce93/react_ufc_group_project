import React, {Component} from 'react'
import FighterBarGraph from './FighterBarGraph'
import MapWrapper from './MapWrapper'
import './SelectedFighter.css'


class SelectedFighter extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFighter: null
    }
    this.fetchFighterObject = this.fetchFighterObject.bind(this);
    this.prettyName = this.prettyName.bind(this);
    this.getAge = this.getAge.bind(this);
    this.getCountry = this.getCountry.bind(this);
    this.getWeightClass = this.getWeightClass.bind(this);
    this.getHeight = this.getHeight.bind(this);
    this.getWeight = this.getWeight.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getAverageFightDuration = this.getAverageFightDuration.bind(this);
    this.getStrengths = this.getStrengths.bind(this);
  }

  fetchFighterObject(){
    const url = `http://localhost:3001/api/fighters/${this.props.selectedFighter}`
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

getImage(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<img src={this.state.selectedFighter.left_full_body_image} alt="fighter profile"/>)
}



prettyName(){
  if(!this.state.selectedFighter){
    return null;
  }
  if(!this.state.selectedFighter.nickname){
    return(
      <h4 className="selectedFighter-name">{this.state.selectedFighter.first_name} {this.state.selectedFighter.last_name}</h4>
    )
  }
  return(
    <h4 className="selectedFighter-name">{this.state.selectedFighter.first_name} "{this.state.selectedFighter.nickname}" {this.state.selectedFighter.last_name}</h4>
  )
}

getAge(){
  if(!this.state.selectedFighter){
    return null;
  }
  const currentDate = new Date();
  const fightersDOB = new Date(this.state.selectedFighter.dob);
  const parsedCurrentDate = Date.parse(currentDate);
  const parsedFightersDOB = Date.parse(fightersDOB);
  const age_millseconds = parsedCurrentDate - parsedFightersDOB
  const age = parseInt(age_millseconds/(1000 * 60 * 60 * 24 * 365.25), 10);
  return (<div className="selectedFighter-row"><p className="selectedFighter-dem-title">Age</p> <p className="selectedFighter-dem-info">{age}</p></div>);
}

getCountry(){
  if(!this.state.selectedFighter){
    return null;

  }

  return(<div className="selectedFighter-row"><p className="selectedFighter-dem-title">Location</p> <p className="selectedFighter-dem-info">{this.state.selectedFighter.city_residing}, {this.state.selectedFighter.country_residing}</p></div>);
}

getWeightClass(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<div className="selectedFighter-row"><p className="selectedFighter-dem-title">Weight Class</p> <p className="selectedFighter-dem-info">{this.state.selectedFighter.weight_class.split("_").join(" ")}</p></div>)
}

getHeight(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<div className="selectedFighter-row"><p className="selectedFighter-dem-title">Height</p> <p className="selectedFighter-dem-info"> {this.state.selectedFighter.height_ft}</p></div>)
}

getWeight(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<div className="selectedFighter-row"><p className="selectedFighter-dem-title">Weight</p><p className="selectedFighter-dem-info"> {this.state.selectedFighter.weight}</p></div>)
}

getAverageFightDuration(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<div className="selectedFighter-row"><p className="selectedFighter-dem-title">Average Fight Duration</p><p className="selectedFighter-dem-info"> {this.state.selectedFighter.AverageFightTime} Minutes</p></div>)
}

getStrengths(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<div className="selectedFighter-row"><p className="selectedFighter-dem-title">Strengths</p><p className="selectedFighter-dem-info"> {this.state.selectedFighter.strengths}</p></div>)
}

getMap(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<MapWrapper selectedFighter={this.state.selectedFighter}/>)
}

getGraphs(){
  if(!this.state.selectedFighter){
    return null;
  }
  return(<FighterBarGraph selectedFighter={this.state.selectedFighter}/>)
}

render(){
  return(
    <React.Fragment>
      <div className="buttonContainer">
        <button className="backToListBtn" onClick={this.props.hideSelectedPlayer}>Back to List</button>
      </div>
      <div className="imageAndDetails">
        <div className="selectedFighterImage">
          {this.getImage()}
        </div>
        <div className="selectedFighterDetails">
          {this.prettyName()}
          {this.getWeightClass()}
          {this.getHeight()}
          {this.getWeight()}
          {this.getAge()}
          {this.getCountry()}
          {this.getStrengths()}
          {this.getAverageFightDuration()}
        </div>
      </div>

      <div className="barChartAndMap-container">
        <div className="fighterBarChart-container">
          <h4 className="chart-title">Fight data</h4>
          {this.getGraphs()}
        </div>

        <div className="map-container">
          <h4 className="mapWrapper-title">Locations of past Fights</h4>
          {this.getMap()}
        </div>

      </div>

    </React.Fragment>
  )
}
}

export default SelectedFighter;
