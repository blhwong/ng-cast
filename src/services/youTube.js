angular.module('video-player')
.service('youTube', function($http) {
  return {
    search: function(options, callback) {
      if (options.query) {
        $http({
          url: 'https://www.googleapis.com/youtube/v3/search',
          method: 'GET',
          params: {
            q: options.query,
            key: options.key,
            maxResult: options.maxResults || 5,
            part: 'snippet',
            type: 'video',
            videoEmbeddable: true
          }
        }).then(function successCallback(response) {
          console.log('Success!');
          callback(response);
        }, function errorCallback(response) {
          console.log('Fail');
        });

      }
    }
  };
});
