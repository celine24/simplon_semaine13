app.controller('appCtrl', ['$scope', '$http', function ($scope, $http, $rootScope) {
    $scope.depenses = [
        { valeur: 50 },
        { valeur: 25 }
    ];
    
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
    
}]);