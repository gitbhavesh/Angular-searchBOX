var app = angular.module('mainApp', []);


app.controller('students', function($scope, $http){
    $http.get("data.json")
    .success(function(response){
        $scope.students = response.records;
    })
})
