/**
 * Created by Ryley Sevier on 7/9/2016.
 */
/**
 * You must include the dependency on 'ngMaterial'
 */
angular.module('terraSpeak', ['ngMaterial'])
    .controller('TerraSpeakCtlr', function($scope, apiFactory) {

    $scope.selectedRoom = "/sayall";
    $scope.message = "";
    $scope.volume = 50;
    $scope.selectedAccent = "/en-gb";
    //don't include the preceeding forward slash,
    $scope.rooms = [
        {
            value: "/sayall",
            display: "Whole House"
        },{
            value: "/Kitchen/say",
            display: "Kitchen"
        },{
            value: "/Bar/say",
            display: "Bar"
        },{
            value: "/Furry Walls/say",
            display: "Furry Walls"
        }
    ];

    $scope.accents = [
        {value: "/en-ca", display: "Canadian"},
        {value: "/en-au", display: "Australian"},
        {value: "/en-gb", display: "British"},
        {value: "/en-in", display: "Indian"},
        {value: "/en-us", display: "American"}
    ];

    $scope.tellTerra = function(){

        console.log($scope.selectedRoom + $scope.message + $scope.selectedAccent + "/"+ $scope.volume);
        apiFactory.sendMessage($scope.selectedRoom + "/" + $scope.message + $scope.selectedAccent + "/"+ $scope.volume);
    }

}).factory('apiFactory', ['$http', function($http) {

    var urlBase = 'http://192.168.1.240:5005';
    var apiFactory = {};

    apiFactory.sendMessage = function (argument) {
        return $http.get(urlBase + argument);
    };

    return apiFactory;
}]);