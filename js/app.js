// JavaScript source code
(function () {
    'use strict';

    var app = angular.module("myApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "templates/home.html"
            })
            .when("/animals", {
                templateUrl: "templates/animals.html"
            })
            .when("/fruits", {
                templateUrl: "templates/fruits.html"
            })
            .when("/countries", {
                templateUrl: "templates/countries.html"
            });
    });

})();