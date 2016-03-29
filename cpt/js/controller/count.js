app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.depenses = [
        { valeur: 50 },
        { valeur: 25 }
    ];
    
    $scope.sum = function () {
        var total = 0;
        angular.forEach($scope.depenses, function(value, key) {
            total += value["valeur"];
        });
        $scope.sum = total;
    };
    
    $scope.addExp = function(expense) {
        var obj = {};
        expense = parseInt(expense, 10);
        if (!isNaN(expense)) {
            obj["valeur"] = expense; 
            $scope.depenses.push(obj);
        }
        else {
            alert("Vous n\'avez pas entré un nombre.");
        }
    };
    
    $scope.removeExp = function(index) {
        $scope.depenses.splice(index, 1);
    };
    
    $scope.$watch("depenses", $scope.sum, true);
}]);