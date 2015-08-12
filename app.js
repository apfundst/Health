

var App = angular.module('HealthApp', ["firebase"]);

App.controller('weightController', ['$scope', function($scope) {

    $scope.currentWeight = 255;


}]);
App.controller('noteController',  function($scope, $firebaseArray) {
    //$scope.notes = noteService.getNotes();
    var ref = new Firebase("https://qwlapp.firebaseio.com/notes");
  // create a synchronized array
  $scope.notes = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addNote = function() {
    $scope.notes.$add({
      breakfast: $scope.newBreakfast,
        lunch: $scope.newLunch,
        dinner: $scope.newDinner,
        weight: $scope.newWeight,
        timestamp: Firebase.ServerValue.TIMESTAMP
    });
  };



});

App.service('noteService', function() {
//    var ref = new Firebase("https://qwlapp.firebaseio.com");
//    var notes = $firebaseObject(ref);
//    this.getNotes = function() {return notes; };
//    this.addNote = function(note ){
//        notes.push(note);
//    };
    

});