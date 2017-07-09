'use strict';
angular.module('page.projects', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectController'
  });
}])

.controller('ProjectController', function() {
  this.projects = projectList;
  this.unset = -1;
  this.selected = this.unset;

  this.select = function(index) {
    this.selected = index;
  };

  this.isSelected = function() {
    return this.selected !== this.unset;
  }

});

var projectList = [
  {
    id: 'airena',
    title: 'AIrena'
  },
  {
    id: 'tech-retreat',
    title: 'Tech Retreat'
  },
  {
    id: 'awake-for-now',
    title: 'Awake For Now'
  },
  {
    id: 'light-clapper',
    title: 'Light Clapper'
  },
  {
    id: 'mr-c-lam',
    title: 'Mr C Lam'
  },
  {
    id: 'quadcopter',
    title: 'Quadcopter'
  },
  {
    id: 'theremin',
    title: 'Theremin'
  },
  {
    id: 'drawfriends',
    title: 'DrawFriends'
  }


];
