var myApp = angular.module('Gifter', ['ngRoute', 'satellizer'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl: 'login.html',
        controller: 'AuthController'
        
    }).
    when('/register', {
        templateUrl: 'register.html',
        controller: 'AuthController'
    }). 
    when('/mylist', {
        templateUrl: 'myList.html',
        controller: 'ListController'
    }).
    when('/mylist/:userid', {
        templateUrl: 'userList.html',
        controller: 'UserController'
    }).
    otherwise({
        redirectTo: '/'
    })
}])

.config(['$authProvider', function($authProvider){
    $authProvider.signupUrl = 'http://localhost:3000/auth/register';
    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
}]);
