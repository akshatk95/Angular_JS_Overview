var app = angular.module("contactMgr", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
   $routeProvider
    .when("/banana", {
        templateUrl: "banana.html"
    })
    .when("/tomato", {
        templateUrl : "tomato.html"
    })
    .otherwise({
        template : '<h1>None</h1><p>Nothing has been selected</p><a href="#tomato">prova</a>'
    });

}])