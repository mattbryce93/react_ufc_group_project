## JavaScript Project Specs


# Sports Dashboard

Sports fans want to be able to view relevant sporting events on a dashboard. With a sport of your choice, use an existing API or create a new API to display information about fixtures, news and travel information for events.

Possible APIs to use:

- UFC: http://ufc-data-api.ufc.com/api/v1/us
- Football: http://api.football-data.org/index
- Triathalon: https://developers.triathlon.org/docs

## MVP

 - Display upcoming events on a map
 - Display results and ranking of players/teams
 - Allow users to add events to a favourites list



# Route Planner

Visit Scotland are look for ways to encourage people to walk and cycle. Your task is to create an app that allows users to search for cycling and hiking routes, view routes on a map, save routes to a wishlist and mark a route done.

You could use one of the leaflet maps plugins which allows route plotting.

## MVP

Users should be able to:

- Select start and finish locations for their route
- Save routes to a wishlist
- Mark completed routes as ‘done’



# Educational App

The BBC are looking to improve their online offering of educational content by developing some interactive apps that display information in a fun and interesting way.

Your task is to make an MVP to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app. You might use an API to bring in content or a database to store facts. The topic of the app is your choice, but here are some suggestions you could look into:

- Interactive timeline, e.g. of the history of computer programming
- Interactive map of a historical event - e.g. World War 1, the travels of Christopher Columbus

## MVP

- Display some information about a particular topic in an interesting way
- Have some user interactivity, e.g. to move through different sections of content

Some samples of existing apps for inspiration:

- http://chemistryset.chemheritage.org/#/
- http://www.royalmailheritage.com/main.php
- http://education.iceandsky.com/
- http://histography.io - may only work in Safari
- http://worldpopulationhistory.org/map/1838/mercator/1/0/24/



# Browser Game

Create a browser game based on an existing card or dice game. Model the game logic and then display it in the browser for a user to interact with.

Make your own MVP with some specific goals to be achieved based on the game you choose to model.

You might use persistence to keep track of the state of the game or track scores/wins. Other extended features will depend on the game you choose.



# Shares App

More and more people are playing the stock market. A local trader has come to you with a portoflio of shares. She wants to be able to analyse it more effectively. She has a small sample data set to give you and would like you to build a minimal viable product (MVP) that uses the data to display her portfolio in useful ways so that she can make better decisions.

## MVP
- View total current value of the portfolio
- View information for individual shares held
- Ability to 'buy'/add more stocks to the portfolio and 'sell'/remove them and update total value.
- View performance trends for individual stocks and the portfolio as a whole

Stock api's can be found here - https://github.com/toddmotto/public-apis#finance

If you want to make your own api that keeps track of the users portfolio an object may look something like this:
```
   {
      "name": "Fusionex",
      "epic":"FXI",
      "price": 120.00,
      "quantity": 2000,
      "buyPrice": 80.00,
      "pastCloseOfDayPrices": [92.00, 89.00, 103.00, 125.00, 108.00, 98.00, 110.00],
      "buyDate":"2014-11-15"
    }

```


# Do What You Like

If none of the other project ideas float your ⛵️, you can take on a project of your own.

Your project must meet the following specification:

- It must be a full stack React app.
- It can contain anything that you have learnt in the past 4 weeks - Maps, Graphs etc.


Before you start this project, write an MVP and potential extensions. You **must** get this signed off by an instructor before proceeding.
