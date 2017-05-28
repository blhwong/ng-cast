angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<',
      searchTerm: '<',
      service: '<'
    },
    controller: function($scope) {
      this.onClick = function() {
        this.service.search({}, function() {});
        this.result(this.searchTerm);
      };
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
