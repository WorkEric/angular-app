//'use strict';

angular.module('spBlogger',['ngResource', 'ui.router','spBlogger.posts', 'spBlogger.admin'])
	.run(['$state', 
		function($state){
			$state.go('allPosts');
		}]
	);

// Declare app level module which depends on filters, and services
/*angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
