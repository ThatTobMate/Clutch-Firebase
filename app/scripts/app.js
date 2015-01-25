/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name clutchFirebaseApp
 * @description
 * # clutchFirebaseApp
 *
 * Main module of the application.
 */
app = angular
  .module('clutchFirebaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profile/:userId', {
        templateUrl: 'views/profile.html',
        controller: 'MainCtrl'
      })
      .when('/consoles', {
        templateUrl: 'views/consoles.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName', {
        templateUrl: 'views/console_games.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle', {
        templateUrl: 'views/games_ladders.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId', {
        templateUrl: 'views/ladder.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/create', {
        templateUrl: 'views/create_team.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/rules', {
        templateUrl: 'views/rules.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/:teamId', {
        templateUrl: 'views/team.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/:teamId/results', {
        templateUrl: 'views/results.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/:teamId/results/:matchId', {
        templateUrl: 'views/match_details.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/matches', {
        templateUrl: 'views/matches.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/matches/create', {
        templateUrl: 'views/create_match.html',
        controller: 'MainCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/matches/:matchId', {
        templateUrl: 'views/match_details.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
