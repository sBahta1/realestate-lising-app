const myApp = angular.module('myApp', ['ngRoute']);

//Angular view routes configuration
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/rentals',{
        templateUrl:'views/rentals.html',
        controller:'RentalController as rc'
    }).when('/sales',{
        templateUrl:'views/sales.html',
        controller:'SaleController as sc'
    }).otherwise({
        template:'<h1>Error 404 page not found</h1>'
    });
})//end config
