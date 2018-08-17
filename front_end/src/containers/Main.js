import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Title from '../components/Title'
import NavBar from '../components/NavBar'
import TeamContainer from './TeamContainer'



class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      allPlayers: [
{
"id": 241895,
"nickname": null,
"wins": 20,
"statid": 1194,
"losses": 1,
"last_name": "Cyborg",
"weight_class": "Women_Featherweight",
"title_holder": true,
"draws": 0,
"first_name": "Cris",
"fighter_status": "Active",
"rank": "C",
"pound_for_pound_rank": "11",
"thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FCris-Cyborg%252FCris-Cyborg_241895_medium_thumbnail.jpg?w640-h320-tc1",
"belt_thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L-CHAMP-PRINT.png?w600-h600-tc1",
"left_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L.png?mh530",
"right_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L.png?mh530",
"profile_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS.png?w600-h600-tc1",
"link": "http://www.ufc.com/fighter/Cris-Cyborg"
},
{
"id": 644622,
"nickname": null,
"wins": 5,
"statid": 3041,
"losses": 2,
"last_name": "Montano",
"weight_class": "Women_Flyweight",
"title_holder": true,
"draws": 0,
"first_name": "Nicco",
"fighter_status": "Active",
"rank": "C",
"pound_for_pound_rank": null,
"thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FNicco-Montano%252FNicco-Montano_644622_medium_thumbnail.jpg?w640-h320-tc1",
"belt_thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FNicco_Montano%252FMONTANO_NICCO_BELT.png?w600-h600-tc1",
"left_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FNicco_Montano%252FMONTANO_NICCO_LR.png?mh530",
"right_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FNicco_Montano%252FMONTANO_NICCO_LR.png?mh530",
"profile_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FNicco_Montano%252FMONTANO_NICCO.png?w600-h600-tc1",
"link": "http://www.ufc.com/fighter/Nicco-Montano"
},
{
"id": 490666,
"nickname": "The Messenger",
"wins": 13,
"statid": 2299,
"losses": 2,
"last_name": "Cejudo",
"weight_class": "Flyweight",
"title_holder": true,
"draws": 0,
"first_name": "Henry",
"fighter_status": "Active",
"rank": "C",
"pound_for_pound_rank": "12",
"thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FHenry-Cejudo%252FHenry-Cejudo_490666_medium_thumbnail.jpg?w640-h320-tc1",
"left_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FHenry_Cejudo%252FCEJUDO_HENRY_L.png?mh530",
"right_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FDoubleheadsPNGs%252FCEJUDO_HENRY_R.png?mh530",
"profile_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FHeadshotPNGs%252FCEJUDO_HENRY.png?w600-h600-tc1",
"link": "http://www.ufc.com/fighter/Henry-Cejudo"
},
{
"id": 231394,
"nickname": null,
"wins": 17,
"statid": 1905,
"losses": 3,
"last_name": "Dillashaw",
"weight_class": "Bantamweight",
"title_holder": true,
"draws": 0,
"first_name": "TJ",
"fighter_status": "Active",
"rank": "C",
"pound_for_pound_rank": "3",
"thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FTJ-Dillashaw%252FTJ-Dillashaw_231394_medium_thumbnail.jpg?w640-h320-tc1",
"belt_thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FTJ_Dillashaw%252Ftj_belt.png?w600-h600-tc1",
"left_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FDoubleheadsPNGs%252FDILLASHAW_TJ_L.png?mh530",
"right_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FTJ_Dillashaw%252FBelt%252FDILLASHAW_TJ_L.png?mh530",
"profile_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FHeadshotPNGs%252FDILLASHAW_TJ.png?w600-h600-tc1",
"link": "http://www.ufc.com/fighter/TJ-Dillashaw"
  }
  ]
}
}

  componentDidMount(){
    this.apiCall();
  }

  apiCall() {
    fetch('http://localhost:3001/api/fighters')
    .then(response => response.json())
    .then(fighters => console.log(fighters))
  }

  render(){
    return(
      <React.Fragment>
        <NavBar/>
        <Title/>
        <p>Main</p>
        <TeamContainer/>
        <ListContainer allPlayers={this.state.allPlayers}/>
      </React.Fragment>
    )
  }
}

export default Main;
