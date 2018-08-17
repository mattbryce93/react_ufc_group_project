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

  //Read route
  server.get('/api/fighters', function(req, res){
    fetch('http://ufc-data-api.ufc.com/api/v3/iphone/fighters')
    .then(res => res.json())
    .then(data => {
      res.json(data)
    }
  )});

  server.get('/api/fighters/:id', function(req, res){
    fetch(`http://ufc-data-api.ufc.com/api/v3/iphone/fighters/${req.params.id}.json`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    }
  )});

  // //Delete route
  // server.delete('/api/fighters', function(req, res){
  //   const filterObject = {};
  //   const fightersCollection = db.collection('roster');
  //   fightersCollection.deleteMany(filterObject, function(err, result){
  //     if(err){
  //       res.status(500);
  //       res.send();
  //     }
  //     res.status(204);
  //     res.send();
  //   });
  // });
  //
  // //Create route
  // server.post('/api/fighters', function(req, res){
  //   const fightersCollection = db.collection('roster');
  //   const dataToSave =  req.body;
  //   fightersCollection.save(dataToSave, function(err, result){
  //     if(err){
  //       console.log(err);
  //       res.status(500);
  //       res.send();
  //     }
  //     console.log('saved to database');
  //     res.status(201);
  //     res.json(result.ops[0]);
  //   })
  // })

  server.listen(3001, function(){
    console.log("Listening on port 3001");
  })
})
