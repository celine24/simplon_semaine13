myApp.controller("asksController", function ($scope) {

    $scope.asks = [
        {
            id : 1,
            ask : "Combien de séries avez-vous suivi entièrement (vu chaque épisode de chaque saison) ?",
            answers : [
                {
                 value : 1,
                 answer : "Aucune"
                },
                {
                 value : 2,
                 answer : "Une ou deux"
                },
                {
                 value : 3,
                 answer : "Plus de 3"
                }
            ]
        },
        {
            id : 2,
            ask : "Dans « Lost Girl », qui est « Bo » ?",
            answers : [
                {
                 value : 1,
                 answer : "Une sorcière"
                },
                {
                 value : 2,
                 answer : "Un succube"
                },
                {
                 value : 3,
                 answer : "Un vampire"
                }
            ]
        },
        {
            id : 3,
            ask : "Dans « Arrow », quel surnom Oliver donne-t-il à sa petite soeur ?",
            answers : [
                {
                 value : 1,
                 answer : "Mimi"
                },
                {
                 value : 2,
                 answer : "Sweety"
                },
                {
                 value : 3,
                 answer : "Speedy"
                }
            ]
        },
        {
            id : 4,
            ask : "Comment s'appelle le colocataire de Sheldon Cooper dans « The Big Bang Theory » ?",
            answers : [
                {
                 value : 1,
                 answer : "Leonard"
                },
                {
                 value : 2,
                 answer : "Howard"
                },
                {
                 value : 3,
                 answer : "Logan"
                }
            ]
        },
        {
            id : 5,
            ask : "De qui la Reine Marie s'éprend-elle dans « Reign » ?",
            answers : [
                {
                 value : 1,
                 answer : "François 1er"
                },
                {
                 value : 2,
                 answer : "Henri VIII"
                },
                {
                 value : 3,
                 answer : "Louis de Condé"
                }
            ]
        },
        {
            id : 6,
            ask : "De quelle maladie Walter White souffre-t-il au début de « Breaking Bad » ?",
            answers : [
                {
                 value : 1,
                 answer : "Un cancer"
                },
                {
                 value : 2,
                 answer : "Une pneumonie"
                },
                {
                 value : 3,
                 answer : "Azheimer"
                }
            ]
        },
        {
            id : 6,
            ask : "Dans « Supernatural », au volant de quelle voiture Sam et Dean parcourent-ils les Etats-Unis ?",
            answers : [
                {
                 value : 1,
                 answer : "Une Impala"
                },
                {
                 value : 2,
                 answer : "Un Hummer"
                },
                {
                 value : 3,
                 answer : "Une Chevrolet"
                }
            ]
        }
    ]
    
    $scope.answers = function (askId) {
        
    }
});