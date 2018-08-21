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
      <Chart chartType="BarChart" width="100%" height="100%" data={data} options={options}/>
    )
  }

  renderPieGraphData(){
    if(!this.props.selectedFighter){
      return null;
    }
    const win_data=[
          ['Win Type', 'Total'],
          ['Decisions Wins',     this.props.selectedFighter.decision_wins],
          ['Technical Knock Outs', this.props.selectedFighter.ko_tko_wins],
          ['Submissions',  this.props.selectedFighter.submission_wins]
        ]

    const win_options={
      title: 'Win Stats',
      pieSliceText: 'label'
    }

    const strike_data=[
      ['Strikes Ratio', 'Total'],
      ['Landed', this.props.selectedFighter.SLpM],
      ['Absorbed', this.props.selectedFighter.SApM],
    ]

    const strike_options={
      title: 'Strikes Landed vs Strikes Absorbed',
      pieSliceText: 'label'
    }

    const striking_data=[
      ['Striking Defence vs Striking Accuracy', 'Total'],
      ['Accuracy', this.props.selectedFighter.StrikingAccuracy],
      ['Defense', this.props.selectedFighter.StrikingDefense]
    ]

    const striking_options={
      title: 'Striking Defence vs Striking Accuracy',
      pieSliceText: 'label'
    }

    const takedown_data=[
      ['Takedown Defence vs Takedown Accuracy', 'Total'],
      ['Accuracy', this.props.selectedFighter.TakedownAccuracy],
      ['Defense', this.props.selectedFighter.TakedownDefense]
    ]

    const takedown_options={
      title: 'Takedown Defence vs Takedown Accuracy',
      pieSliceText: 'label'
    }



    return (
      <React.Fragment>
          <Chart chartType="PieChart" width="200px" height="auto" data={win_data} options={win_options}/>
          <Chart chartType="PieChart" width="200px" height="auto" data={strike_data} options={strike_options}/>
          <Chart chartType="PieChart" width="200px" height="auto" data={striking_data} options={striking_options}/>
          <Chart chartType="PieChart" width="200px" height="auto" data={takedown_data} options={takedown_options}/>
      </React.Fragment>
    )
  }



  render(){
    return (
      <React.Fragment>
        <div className="barChart">
          {this.renderBarGraphData()}
        </div>
        <div className="pieChart">
          {this.renderPieGraphData()}
        </div>
      </React.Fragment>
    )
  }
}

export default FighterBarGraph;
