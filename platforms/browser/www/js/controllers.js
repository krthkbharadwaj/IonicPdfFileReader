angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $cordovaFileOpener2) {
  $scope.playlists = [
    { title: 'Ganesha Suktha', id: 1 },
    { title: 'Durga suktha', id: 2 },
    { title: 'Saraswatee suktha', id: 3 },
    { title: 'Purusha Suktha', id: 4 },
    { title: 'Chamaka', id: 5 },
    { title: 'Namaka', id: 6 },
    { title: 'Mantra Pushpa', id: 7 },
    { title: 'Slokas', id: 10  }
  ];
  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
  };
  $scope.create = function(url) {
    //window.open(url);
    $cordovaFileOpener2.open(
      url,
      'application/pdf'
  ).then(function() {
      // Success!
       alert("success");
  }, function(err) {
       alert(err);
      // An error occurred. Show a message to the user
  });
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
