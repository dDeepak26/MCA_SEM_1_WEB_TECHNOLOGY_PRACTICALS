angular.module('myApp', []).controller('mul', function($scope) {
    $scope.n1 = 2,
    $scope.n2 = 2,
    $scope.cal = function() {
        return $scope.n1 * $scope.n2;
    }
});