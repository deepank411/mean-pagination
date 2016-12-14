var app = angular.module("pagination", ['ui.router', 'bw.paging']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'templates/home.html',
         controller: 'homeCtrl'
      });
   $urlRouterProvider.otherwise('/');
}]);
