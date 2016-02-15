'use strict';

angular.module('styley2App', [
  'styley2App.auth',
  'styley2App.admin',
  'styley2App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'akoenig.deckgrid',
  'ngAnimate',
  'ngFileUpload',
  'nzTour'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
