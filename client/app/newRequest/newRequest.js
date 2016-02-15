'use strict';

angular.module('styley2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newRequest', {
        url: '/newRequest',
        templateUrl: 'app/newRequest/newRequest.html',
        controller: 'NewRequestCtrl'
      });
  });
