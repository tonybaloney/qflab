angular.module('qff.controllers', [])
.controller('DashCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope) {})
.controller('StoryCtrl', function($scope, $location, $ionicScrollDelegate, todo, question) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.tasks = todo.all();
  $scope.questions = question.all();

  $scope.remove = function(task) {
    todo.remove(task);
  };
  $scope.scrollTo = function (id) {
      $location.hash(id);
      var delegateHandle = $ionicScrollDelegate.$getByHandle('storyView');
      delegateHandle.anchorScroll(id);
   };
  $scope.share = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
