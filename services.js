toDoApp.service("Retriever", ["$http", "toDoFactory", function($http, toDoFactory) {
  this.getAll = function() {
    var todos = [];
    $http.get("http://quiet-beach-24792.herokuapp.com/todos.json").then(function (response) {
      response.data.forEach(function(item) {
        todos.push(toDoFactory.create(item.text));
      });
    });
    return todos;
  };
}]);
