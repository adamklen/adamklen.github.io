'use strict';
(function() {
// Declare app level module which depends on views, and components
  var app = angular.module('page', [
    'ngAnimate',
    'ngRoute',
    'page.about',
    'page.projects',
    'page.contact'
  ]);

  app.controller('TabController', function() {
    this.tab = 0;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('SocialController', function() {
    this.socialMedia = [
      {name: "LinkedIn", icon:"assets/linkedin.png", url:"https://ca.linkedin.com/in/adamklen"},
      {name: "Github", icon:"assets/github.png", url:"https://github.com/TheFlyingPenguin"}
    ];
  });

})();


