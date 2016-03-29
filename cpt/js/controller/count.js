app.controller('appCtrl', ['$scope', '$http', function ($scope, $http, $rootScope) {
    $scope.depenses = [
        { valeur: 50 },
        { valeur: 25 }
    ];

    
    $scope.calculation = function() {
        var sum = 0;
        angular.forEach($scope.depenses, function(value, key) {
            sum += value["valeur"];
        });
        return sum;
    };
    
    $scope.total = $scope.calculation();
    
    $scope.addExp = function(expense) {
        var obj = {};
        expense = parseInt(expense, 10);
        if (!isNaN(expense)) {
            obj["valeur"] = expense; 
            $scope.depenses.push(obj);
            
            $scope.total = $scope.calculation();
        }
        else {
            alert("Vous n\'avez pas entré un nombre.");
        }
    };
    
}]);