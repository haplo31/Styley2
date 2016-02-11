'use strict';

angular.module('styley2App.auth', [
  'styley2App.constants',
  'styley2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
