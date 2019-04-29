var app = angular.module("aolApp", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/main.html"
    }).when("/stage1", {
        templateUrl: "app/stage1.html",
        controller: "mainCtrl"
    }).otherwise({
        redirectTo: "/"
      });
});