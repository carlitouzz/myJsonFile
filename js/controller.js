// JavaScript source code
(function () {
    'use strict';

    angular.module('myApp').controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$scope', 'myService'];

    function myCtrl($scope, myService) {
        $scope.text = '',
        $scope.anim = 'cat Cat CAT',
        $scope.fruit = 'apple Apple APPLE',
        $scope.coun = 'China china CHINA',
        $scope.findAnim = findAnim,
        $scope.findFruit = findFruit,
        $scope.findCoun = findCoun;

        function findAnim() {
            $scope.exist = myService.contains($scope.text, $scope.anim);
        }
        function findFruit() {
            $scope.exist = myService.contains($scope.text, $scope.fruit);
        }
        function findCoun() {
            $scope.exist = myService.contains($scope.text, $scope.coun);
        }
    }

    angular.module('myApp').controller('myCtrl1', myCtrl1);

    myCtrl1.$inject = ['$scope', 'myHttpService'];

    function myCtrl1($scope, myHttpService) {
        $scope.users = [];
        $scope.getUsers = getUsers;

        function getUsers() {
            myHttpService.getUsers().then(function (result) {
                $scope.users = result;
            });
        }
    }

})();
