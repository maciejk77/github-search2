githubUserSearch.factory('Search', ['$http', function($http) { 
  var queryUrl = 'https://api.github.com/search/users?access_token=bcdea0c6187824554f2a9a9fbef92d1c5d298288';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      });
    }
  }
}]);