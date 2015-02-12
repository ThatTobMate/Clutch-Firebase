'use strict';
app.factory('Console', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var consoles = $firebase(ref.child('consoles')).$asArray();
  var games = $firebase(ref.child('games')).$asArray();

   // console.log(ref.child('games').child('consoles').orderByChild('Xbox One'))

  var Console = {
    all: consoles,
    games: games,
    ref: ref
  };

  return Console;
});