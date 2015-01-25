'use strict';

/**
 * @ngdoc function
 * @name clutchFirebaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clutchFirebaseApp
 */
angular.module('clutchFirebaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
