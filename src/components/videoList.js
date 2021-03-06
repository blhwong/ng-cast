angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      video: '<',
      onClick: '<',
      videos: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
