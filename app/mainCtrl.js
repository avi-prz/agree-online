app.controller('mainCtrl', function ($scope,$location) { 
    $scope.Next = function () {
        $location.path("/stage1");  
    };
});