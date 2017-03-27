// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
  .controller('TodoCtrl', function($scope, $ionicPopup, $ionicListDelegate) {
    $scope.tasks = [{
      title: "Note"
    }, ];
    $scope.newTask = function() {
      $ionicPopup.prompt({
        title: "New Note",
        template: "Enter Note: ",
        inputPlaceholder: "You can enter number or text",
        okText: "Create Note"
      }).then(function(res) {
        if (res) $scope.tasks.push({
          title: res,
          completed: false
        });
      })
    };

    $scope.edit = function(task) {
      $scope.data = {
        response: task.title
      };
      $ionicPopup.prompt({
        title: "Edit Note",
        scope: $scope
      }).then(function(res) { // promise
        if (res !== undefined) task.title = $scope.data.response;
        $ionicListDelegate.closeOptionButtons()
      })
    };

  })


  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


function cal1() {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = Math.round((parseFloat(a) / parseFloat(b)) * 100) + '%';
  var d = "Please Enter Number Yearly Profit";
  var e = "Please Enter Initial Investment";
  var f = "Please Enter Numbers";
  if (a && b == "") {
    document.getElementById('answer').innerHTML = e.toString();
  } else if (b == "") {
    document.getElementById('answer').innerHTML = f.toString();
  } else if (a == "") {
    document.getElementById('answer').innerHTML = d.toString();
  } else {
    document.getElementById('answer').innerHTML = c.toString();
  }
}

function cal2() {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = Math.round((parseFloat(b) / parseFloat(a))) + ' years';
  var d = "Please Enter Number Yearly Profit";
  var e = "Please Enter Initial Investment";
  var f = "Please Enter Numbers";
  if (a && b == "") {
    document.getElementById('answer').innerHTML = e.toString();
  } else if (b == "") {
    document.getElementById('answer').innerHTML = f.toString();
  } else if (a == "") {
    document.getElementById('answer').innerHTML = d.toString();
  } else {
    document.getElementById('answer').innerHTML = c.toString();
  }
}


function cal3() {
  var a = document.getElementById('a').value = "";
  var b = document.getElementById('b').value = "";
  var c = "Please Enter Number";
  document.getElementById('answer').innerHTML = c.toString();
}
