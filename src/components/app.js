angular.module('video-player')
.directive('app', function() {
  return {
    scope: {
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, youTube) {
      this.search = youTube;
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      var self = this;
      this.selectVideo = function(obj) {
        this.currentVideo = obj;
      }.bind(this);
      this.searchResults = function(searchTerm) {
        console.log('click');
        var options = {
          query: searchTerm,
          key: window.YOUTUBE_API_KEY,
          maxResults: 5
        };
        youTube.search(options, function(response) {
          if (response.data === undefined) {
            self.videos = response;
          } else {
            self.videos = response.data.items;
          }
          self.currentVideo = self.videos[0];
        });
      };
      console.log($scope);
      this.searchResults('dog');
    },
    templateUrl: 'src/templates/app.html'
  };
}
);
