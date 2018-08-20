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
      ["Losses", this.props.selectedFighter.losses, "color: #DA3B21"],
      ["Draws", this.props.selectedFighter.draws, "color: #FD9827"]
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
    const win_data=[
          ['Win Type', 'Total'],
          ['Decision Wins',     this.props.selectedFighter.decision_wins],
          ['Technical Knock Out Wins', this.props.selectedFighter.ko_tko_wins],
          ['Submission Wins',  this.props.selectedFighter.submission_wins]
        ]

    const win_options={
      title: 'Win Stats',
      pieSliceText: 'label'
    }

    const strike_data=[
      ['Strikes Ratio', 'Total'],
      ['Strikes Landed', this.props.selectedFighter.SLpM],
      ['Strikes Absorbed', this.props.selectedFighter.SApM],
    ]

    const strike_options={
      title: 'Strikes',
      pieSliceText: 'label'
    }

    const striking_data=[
      ['Striking Defence vs Striking Accuracy', 'Total'],
      ['Striking Accuracy', this.props.selectedFighter.StrikingAccuracy],
      ['Striking Defense', this.props.selectedFighter.StrikingDefense]
    ]

    const striking_options={
      title: 'Striking Defence vs Striking Accuracy',
      pieSliceText: 'label'
    }

    const takedown_data=[
      ['Takedown Defence vs Takedown Accuracy', 'Total'],
      ['Takedown Accuracy', this.props.selectedFighter.TakedownAccuracy],
      ['Takedown Defense', this.props.selectedFighter.TakedownDefense]
    ]

    const takedown_options={
      title: 'Takedown Defence vs Takedown Accuracy',
      pieSliceText: 'label'
    }



    return (
      <React.Fragment>
        <Chart chartType="PieChart" width="100%" height="400px" data={win_data} options={win_options}/>
        <Chart chartType="PieChart" width="100%" height="400px" data={strike_data} options={strike_options}/>
        <Chart chartType="PieChart" width="100%" height="400px" data={striking_data} options={striking_options}/>
        <Chart chartType="PieChart" width="100%" height="400px" data={takedown_data} options={takedown_options}/>
      </React.Fragment>
    )
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
