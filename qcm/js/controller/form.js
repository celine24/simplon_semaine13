myApp.controller("formController", function ($scope) {
    $scope.display = false;
    
    $scope.calculate = function () {
        $scope.totalScore = 0;
        $scope.result;
        angular.forEach($scope.asks, function(ask) {
            $scope.display = true;
            $scope.totalScore += parseInt(ask.score);
        });
        if ($scope.totalScore > 10) {
            $scope.result = $scope.totalScore;
            $scope.profil = $scope.categories[0];
        }
        else if ($scope.totalScore > 5) {
            $scope.result = $scope.totalScore;
            $scope.profil =  $scope.categories[1];
        }
        else {
            $scope.result = $scope.totalScore;
            $scope.profil =  $scope.categories[2];
        }
        $scope.totalScore = 0;
    };
    
    $scope.reinit = function() {
        $scope.display = false;
    };
    
    $scope.asks = [
        {
            id : 1,
            label : "Combien de séries avez-vous suivi entièrement (vu chaque épisode de chaque saison) ?",
            answers : [
                {
                 score : 0,
                 label : "Aucune",
                 category : "Minable"
                },
                {
                 score : 1,
                 label : "Une ou deux",
                 category : "Minable"
                },
                {
                 score : 2,
                 label : "Plus de 3",
                 category : "Minable"
                }
            ]
        },
        {
            id : 2,
            label : "Dans « Lost Girl », qui est « Bo » ?",
            answers : [
                {
                 score : 0,
                 label : "Une sorcière",
                 category : "Minable"
                },
                {
                 score : 1,
                 label : "Un succube",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Un vampire",
                 category : "Minable"
                }
            ]
        },
        {
            id : 3,
            label : "Dans « Arrow », quel surnom Oliver donne-t-il à sa petite soeur ?",
            answers : [
                {
                 score : 0,
                 label : "Mimi",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Sweety",
                 category : "Minable"
                },
                {
                 score : 2,
                 label : "Speedy",
                 category : "Minable"
                }
            ]
        },
        {
            id : 4,
            label : "Comment s'appelle le colocataire de Sheldon Cooper dans « The Big Bang Theory » ?",
            answers : [
                {
                 score : 2,
                 label : "Leonard",
                 category : "Minable"
                },
                {
                 score : 1,
                 label : "Howard",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Logan",
                 category : "Minable"
                }
            ]
        },
        {
            id : 5,
            label : "De qui la Reine Marie s'éprend-elle dans « Reign » ?",
            answers : [
                {
                 score : 1,
                 label : "François 1er",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Henri VIII",
                 category : "Minable"
                },
                {
                 score : 2,
                 label : "Louis de Condé",
                 category : "Minable"
                }
            ]
        },
        {
            id : 6,
            label : "De quelle maladie Walter White souffre-t-il au début de « Breaking Bad » ?",
            answers : [
                {
                 score : 1,
                 label : "Un cancer",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Une pneumonie",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Alzheimer",
                 category : "Minable"
                }
            ]
        },
        {
            id : 7,
            label : "Dans « Supernatural », au volant de quelle voiture Sam et Dean parcourent-ils les Etats-Unis ?",
            answers : [
                {
                 score : 2,
                 label : "Une Chevrolet",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Un Hummer",
                 category : "Minable"
                },
                {
                 score : 0,
                 label : "Un Chrysler",
                 category : "Minable"
                }
            ]
        }
    ];
    
    $scope.categories = [
        {
            name : "Serie-Addict",
            description : "Bravo !"
        },
        {
            name : "Connaisseur",
            description : "Pas mal."
        },
        {
            name : "Néophyte",
            description : "Outch..."
        }
        
    ];
});

