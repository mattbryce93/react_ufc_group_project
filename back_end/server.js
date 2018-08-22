const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const fetch = require ('node-fetch');
const cors = require('cors');

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));
server.use(cors());

// Connect to the database
MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err){
    console.log(err);
    return;
  }
  const db = client.db('fighters');
  console.log('Connected to database');

  // Show all fighters
  server.get('/api/fighters', function(req, res){
    fetch('http://ufc-data-api.ufc.com/api/v3/iphone/fighters')
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
  })

  // Show one fighter
  server.get('/api/fighters/:id', function(req, res){
    fetch(`http://ufc-data-api.ufc.com/api/v3/iphone/fighters/${req.params.id}.json`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
  })

  server.get('/api/coords/:location', function(req, res){
    fetch(`https://nominatim.openstreetmap.org/search?q=${req.params.location}&limit=1&format=json`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
  })

  //Delete all teams
  server.delete('/api/teams', function(req, res){
    const filterObject = {};
    const teamsCollection = db.collection('teams');
    teamsCollection.deleteMany(filterObject, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }
      res.status(204);
      res.send();
    })
  })

  // Delete one team
  server.delete('/api/teams/:id', function(req, res){
    const teamsCollection = db.collection('teams');
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    teamsCollection.deleteOne(filterObject, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }
      res.status(204);
      res.json(result);
    })
  })

  //Create a new team
  server.post('/api/teams', function(req, res){
    const teamsCollection = db.collection('teams');
    const teamToSave = req.body;
    teamsCollection.save(teamToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.json();
      }

      console.log('saved to database');
      res.status(201);
      res.json(result.ops[0]);
    })
  })

  // Show all teams
  server.get('/api/teams', function(req, res){
    const teamsCollection = db.collection('teams');
    teamsCollection.find().toArray(function(err, allTeams){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      
      res.status(200);
      res.json(allTeams);

    })
  })

  server.get('api/teams/playerteam', function(req, res){
    const teamsCollection = db.collection('teams');
    // const filterObject = {player_team: {$exists : true } };
    // console.log(filterObject);
    teamsCollection.distinct("player_team", function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send()
      }
      res.json(result);
    })
  })

  // Show one team by id
  server.get('/api/teams/:id', function(req, res){
    const teamsCollection = db.collection('teams');
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    teamsCollection.findOne(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(result);
      // res.json(201);
    })
  })


  server.listen(3001, function(){
    console.log("Listening on port 3001");
  })
})
