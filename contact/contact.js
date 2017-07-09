'use strict';
var contactModule = angular.module('page.contact', ['ngRoute']);

contactModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'MessageController'
  })
}]);

contactModule.controller('MessageController', function() {
  this.message = {};

  this.send = function() {
    $('#submit').prop('value', 'Sent!');

    var org = '';
    if (this.message.organization) {
      org = ' of ' + this.message.organization;
    }
    window.open('mailto:' + 'adam@klen.xyz?'
                + 'subject=Message from ' + this.message.name + ' (' + this.message.email + ')' + org
                + '&body=' + this.message.body.replace(/\n/g, '%0D%0A'));
    console.log(this.message);

    this.message = {};
  }
});
