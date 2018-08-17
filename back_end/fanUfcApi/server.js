const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

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
    const fightersCollection = db.collection('roster');
    fightersCollection.find().toArray(function(err, allRoster){
      if(err){
        console.log(err);
        res.status(500);
        res.send()
      }

      res.json(allRoster);
    });
  });

  //Delete route
  server.delete('/api/fighters', function(req, res){
    const filterObject = {};
    const fightersCollection = db.collection('roster');
    fightersCollection.deleteMany(filterObject, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }
      res.status(204);
      res.send();
    });
  });

  //Create route
  server.post('/api/fighters', function(req, res){
    const fightersCollection = db.collection('roster');
    const dataToSave =  req.body;
    fightersCollection.save(dataToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log('saved to database');
      res.status(201);
      res.json(result.ops[0]);
    })
  })

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  })
})
