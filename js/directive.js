// JavaScript source code
(function () {
    'use strict';
    angular.module('myApp').directive('devInfo', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '<h5>Developed by Carlos Cardoso Isidoro</h5>'
        };
    });
})();
