'use strict';
app.controller('ConsolesCtrl', function ($scope, $routeParams, Console){

	$scope.consoles = Console.all;
	$scope.games = Console.games;
	$scope.ref = Console.ref
	$scope.param1 = $routeParams.consoleName;

});


