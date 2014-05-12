'use strict';

var darinsApp = angular
  .module('darinsApp', [
    'ngCookies', 'duScroll', 'ngRoute'
  ]).config(function($routeProvider) {
      $routeProvider.when('/home', {
	  templateUrl: 'views/home.html',
      });


      $routeProvider.otherwise({ redirectTo: '/home'});
  });

console.log("h");
