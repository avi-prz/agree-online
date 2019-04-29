app.controller('mainCtrl', function ($scope, $location) { 
    $scope.next = function (state) {
        $location.path("/stage" + state);  
    };
});