toDoApp.service("Retriever", ["$http", "toDoFactory", function($http, toDoFactory) {
  this.getAll = function() {
    var todos = [];
    _callApi(todos);
    return todos;
  };

  function _callApi (todos) {
    $http.get("http://quiet-beach-24792.herokuapp.com/todos.json").then(function (response) {
      return _makeArrayFromResponse(response.data, todos);
    });
  }

  function _makeArrayFromResponse (data, todos) {
    data.forEach(function(item) {
      todos.push(toDoFactory.create(item.text, item.completed));
    });
    return todos;
  }

}]);
