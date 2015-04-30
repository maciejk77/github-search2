githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('https://api.github.com/search/user?access_token=bcdea0c6187824554f2a9a9fbef92d1c5d298288')

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };
}]);