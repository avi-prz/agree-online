app.controller('mainCtrl', function ($scope,$location) { 
    $scope.next = function () {
        $location.path("/stage1");  
    };
});