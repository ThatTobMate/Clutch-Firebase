'use strict';
app.controller('GamesCtrl', function ($scope, $routeParams, Game){

	$scope.games = Game.all;
	$scope.ref = Game.ref
	$scope.param1 = $routeParams.consoleName;

	//Getting the games for the console clicked on, but it is grabbing this id from the URL parameter, id is the id of the console in firebase e.g. 'XBOX ONE'
	//It is saying reference the database look for the games table and filter out the games that belong to the console called 'XBOX ONE'.
	$scope.gamesPage = function(id){
	$scope.ref.child('games').orderByChild('console').equalTo(id).once('value', function(snapshot) {
	  
	  
	  $scope.gamespage = snapshot.val();

	});
	}
	$scope.gamesPage($scope.param1)

});


