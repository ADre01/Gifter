myApp.controller('ListController', ['$scope', '$http', '$location', '$route', function ($scope, $http, $location, $route) {
    $scope.updateButton = true;
    $scope.getList = function () {
        $http.get('http://localhost:3000/lists').then(function (results) {
            $scope.items = results.data;
            console.log($scope.items);
            $scope.user = results.data[0].user;
        }).catch(function (err) {
            console.log(err);
        });
    }

    $scope.addToList = function () {
        $http.post('http://localhost:3000/lists', $scope.item).then(function (response) {
            console.log(response);
        }).catch(function (err) {
            console.log(err);
        });
    }



    $scope.deleteItem = function (id) {
        $http.delete('http://localhost:3000/lists/' + id).then(function (result) {
            console.log("Deleted Item");
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });

    }
}]);