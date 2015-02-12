'use strict';
app.factory('Game', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var games = $firebase(ref.child('games')).$asArray();

   // console.log(ref.child('games').child('consoles').orderByChild('Xbox One'))

  var Game = {
    all: games,
    ref: ref
  };

  return Game;
});