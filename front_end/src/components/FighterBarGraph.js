import React, {Component} from 'react';
import { Chart } from "react-google-charts";

class FighterBarGraph extends Component{
  constructor(props){
    super(props);
    this.renderBarGraphData = this.renderBarGraphData.bind(this);
    this.renderPieGraphData = this.renderPieGraphData.bind(this);
  }

  renderBarGraphData(){
    if(!this.props.selectedFighter){
      return null;
    }
      const data = [["Stat", "", { role: "style" }],
      ["Wins", this.props.selectedFighter.wins, "color: #3669C9"],
      ["Losses", this.props.selectedFighter.losses, "color: red"],
      ["Draws", this.props.selectedFighter.draws, "color: orange"],
      ["Strikes Landed per Minute", this.props.selectedFighter.SLpM, ""],
      ["Strikes Absorbed per Minute", this.props.selectedFighter.SApM, ""]
      ]

      const options={
    title: 'Fighter Stats',
    hAxis: { title: 'Total'},
    legend: 'none',
    animation: {
      startup: true,
      easing: 'out',
      duration: 1500,
    }
  }

    return (
      <Chart chartType="BarChart" width="100%" height="400px" data={data} options={options}/>
    )
  }

  renderPieGraphData(){
    if(!this.props.selectedFighter){
      return null;
    }
    const data=[
          ['Win Type', 'Total'],
          ['Decision Wins',     this.props.selectedFighter.decision_wins],
          ['Technical Knock Out Wins', this.props.selectedFighter.ko_tko_wins],
          ['Submission Wins',  this.props.selectedFighter.submission_wins]
        ]

    const options={
      title: 'Win Stats',
      legend: 'none',
      pieSliceText: 'label'
    }

    return (<Chart chartType="PieChart" width="100%" height="400px" data={data} options={options}/>)
  }



  render(){
    return (
      <React.Fragment>
        {this.renderBarGraphData()}
        {this.renderPieGraphData()}
      </React.Fragment>
    )
  }
}

export default FighterBarGraph;
