import React, {Component} from 'react';
import { Chart } from "react-google-charts";

class FighterBarGraph extends Component{
  constructor(props){
    super(props);
    this.renderGraphData = this.renderGraphData.bind(this);
  }

  renderGraphData(){
    if(!this.props.selectedFighter){
      return null;
    }
    return ([
      ["Stat", "Wins", "Losses", "Draws"],
      ["", this.props.selectedFighter.wins, this.props.selectedFighter.losses, this.props.selectedFighter.draws]
    ])
  }

  render(){
    return (
      <React.Fragment>
        <Chart chartType="BarChart" width="100%" height="400px" data={this.renderGraphData()} />
      </React.Fragment>
    )
  }
}

export default FighterBarGraph;
