angular.module('starter.controllers', ['ngCordova', 'ngPDFViewer'])

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

.controller('PlaylistsCtrl', [ '$scope', 'PDFViewerService', function($scope, $http, pdf) {
$scope.$on( "$ionicView.enter", function( scopes, states) {
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
});
    //$scope.imgurl = "assets/1.jpg"; 
    //window.open('assets/1.pdf');
    //$scope.pdfURL = "assets/1.pdf"; 
    //$scope.instance = pdf.Instance("viewer");
    /*$scope.pageLoaded = function(curPage, totalPages) {
		$scope.currentPage = curPage;
		$scope.totalPages = totalPages;
    };
    $scope.loadProgress = function(loaded, total, state) {
		console.log('loaded =', loaded, 'total =', total, 'state =', state);
    }; */
//    window.open("http://www.pdf995.com/samples/pdf.pdf")
/*    var file = '/www/assets/'+url+'.pdf';
    console.log("Error is here karthik "+file);
    $cordovaFileOpener2.open(
      file,
      'application/pdf'
  ).then(function() {
      // Success!
       //alert("success");
  }, function(err) {
       //alert(err);
       console.log("Error is here karthik "+JSON.stringify(err)); 
      // An error occurred. Show a message to the user
  }); */
}])

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('TestController', [ '$scope', 'PDFViewerService', function($scope, pdf) {
	console.log('TestController: new instance');

	$scope.pdfURL = "test.pdf";

	$scope.instance = pdf.Instance("viewer");

	$scope.nextPage = function() {
		$scope.instance.nextPage();
	};

	$scope.prevPage = function() {
		$scope.instance.prevPage();
	};

	$scope.gotoPage = function(page) {
		$scope.instance.gotoPage(page);
	};

	$scope.pageLoaded = function(curPage, totalPages) {
		$scope.currentPage = curPage;
		$scope.totalPages = totalPages;
	};

	$scope.loadProgress = function(loaded, total, state) {
		console.log('loaded =', loaded, 'total =', total, 'state =', state);
	};
}]);
