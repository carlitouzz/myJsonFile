// JavaScript source code
(function () {
    'use strict';
    angular.module('myApp').service('myService', function () {
        this.contains = function (str, ans) {
            if (str.length != 0) {
                if (ans.indexOf(str) !== -1)
                    return 'Right! :)'
                else
                    return 'Wrong! :('
            }
        }
    });

    angular.module('myApp').service('myHttpService', myHttpService);

    myHttpService.$inject = ['$http'];

    function myHttpService($http) {
        var service = {
            getUsers: getUsers
        };

        function getUsers() {
            return $http.get('http://www.mocky.io/v2/5955225c0f0000f703fc0f70')
	        	.then(function (response) {
	        	    return response.data;
	        	})
	        	.catch(function () {
	        	    console.log('Error');
	        	});
        }
        return service;
    };

})();
