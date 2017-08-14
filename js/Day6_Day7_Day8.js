var app = angular.module('myFilterExample',[]);
app.filter('myFilter', function() {
    return function(x) {
        var index, character, text = "";
        for (index = 0; index < x.length; index++) {
            character = x[index];
            if (index % 2 == 0) {
                character = character.toUpperCase();
            }
            if (index % 2 != 0) {
                character = character.toLowerCase();
            }
            text += character;
        }
        return text;
    };
});
app.controller('namesCtrl', function($scope) {
    $scope.names = [
        'Aman',
        'Akshat',
        'Anvay',
        'Akshay',
        'Nakul',
        'Jai',
        'Bhavesh',
        'Mudit',
        'Kshitij'
        ];
});
angular.module('myFilterExample2', []).controller('namesCtrl2', function($scope) {
    $scope.names = [
        {id:'1',name:'Aman',marks:'93'},
        {id:'3',name:'Akshat',marks:'95'},
        {id:'2',name:'Aakash',marks:'89'},
        {id:'5',name:'Nikhil',marks:'85'},
        {id:'4',name:'Chirag',marks:'83'},
        {id:'9',name:'Bodhi',marks:'73'},
        {id:'6',name:'Parag',marks:'77'},
        {id:'8',name:'Jai',marks:'91'},
        {id:'7',name:'Bhavesh',marks:'87'},
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
angular.module('myFilterExample3', []).controller('namesCtrl3', function($scope) {
    $scope.names = [
        'Jack',
        'Jill',
        'Stuart',
        'Mark',
        'Steve',
        'Josh',
        'Mitchell'
    ];
});
var app2 = angular.module('myConverter', []);

app2.service('hexadec_convert', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app2.controller('myHex', function($scope, hexadec_convert) {
  $scope.hexadec = hexadec_convert.myFunc(137);
});
var app3 = angular.module('myform', []);
app3.controller('formCtrl', function($scope) {
    $scope.default = {fname:"James", lname:"Bond"};
    $scope.reset = function() {
        $scope.student = angular.copy($scope.default);
    };
    $scope.reset();
});
var app4 = angular.module('myevent', []);
app4.controller('CoordinatesCtrl', function($scope) {
    $scope.coordinatesFunc = function(myEvent) {
        $scope.x_coordinate = myEvent.clientX;
        $scope.y_coordinate = myEvent.clientY;
    }
});
var app = angular.module('myvalidation', []);
app.controller('validation_Controller', function($scope) {
    $scope.name = 'Akshat Khare';
    $scope.email = 'a@b.c';
});
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
        template : '<h2>None</h2><p>Nothing has been selected</p><a href="#tomato">prova</a>'
    });

}])
angular.module("myModule",["myModule1","myFilterExample","myFilterExample2","myFilterExample3","myConverter","myform","myevent","myvalidation","contactMgr"]);