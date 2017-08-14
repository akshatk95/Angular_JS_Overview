var app = angular.module("angularOverview", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
   $routeProvider
    .when("/day5", {
        templateUrl: "<h1>HELLO</h1>"
    })
    .when("/tomato", {
        templateUrl : "tomato.html"
    })
    .otherwise({
        template : '<h1>None</h1><p>Nothing has been selected</p><a href="#tomato">prova</a>'
    });

}])