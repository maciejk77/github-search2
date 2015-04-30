describe('factory: Search', function(){

  var search;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("https://api.github.com/search/users?access_token=bcdea0c6187824554f2a9a9fbef92d1c5d298288&q=hello")
      .respond(
        { items: items }
      );
  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  it('responds to query', function(){
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
    .then(function(response) {
      expect(response.data).toEqual(items)
    })
  });
});