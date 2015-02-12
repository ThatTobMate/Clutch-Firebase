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
var app = angular
  .module('clutchFirebaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://clutchgaming.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'ConsolesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'PostsCtrl'
      })
      .when('/profile/:userId', {
        templateUrl: 'views/profile.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles', {
        templateUrl: 'views/consoles.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName', {
        templateUrl: 'views/console_games.html',
        controller: 'GamesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle', {
        templateUrl: 'views/games_ladders.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId', {
        templateUrl: 'views/ladder.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/create', {
        templateUrl: 'views/create_team.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/rules', {
        templateUrl: 'views/rules.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/:teamId', {
        templateUrl: 'views/team.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/:teamId/results', {
        templateUrl: 'views/results.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/:teamId/results/:matchId', {
        templateUrl: 'views/match_details.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/matches', {
        templateUrl: 'views/matches.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/matches/create', {
        templateUrl: 'views/create_match.html',
        controller: 'ConsolesCtrl'
      })
      .when('/consoles/:consoleName/:gameTitle/:ladderId/matches/:matchId', {
        templateUrl: 'views/match_details.html',
        controller: 'ConsolesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
