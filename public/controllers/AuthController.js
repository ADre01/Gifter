myApp.controller('AuthController', ['$scope','$rootScope', '$auth', '$location',function ($scope, $rootScope, $auth, $location) {
    $scope.register = function(){
        $auth.signup($scope.user).then(function(token){
            $auth.setToken(token);
            $location.path('/mylist');
        }).catch(function(err){
            console.log(err);
        });
    }


    $scope.login = function () {
       $auth.login($scope.user).then(function(token){
           $auth.setToken(token);
           $location.path('/mylist');
       }).catch(function(err){
           console.log(err);
       });
    }
    
    $scope.logout = function(){
        $auth.logout();
    }
}]);