var app = angular.module("aolApp", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/main.html"
    }).when("/stage1", {
        templateUrl: "app/stage1.html",
        controller: "mainCtrl"
    }).when("/stage2", {
        templateUrl: "app/stage2.html",
        controller: "mainCtrl"
    }).otherwise({
        redirectTo: "/",
        controller: "mainCtrl"
      });
});