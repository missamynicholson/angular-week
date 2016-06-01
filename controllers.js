toDoApp.controller("ToDoController", ["toDoFactory", "Retriever", function (toDoFactory, Retriever) {
  var self = this;

  self.todos = Retriever.getAll();

  self.addToDo = function (todoText){
    self.todos.push(toDoFactory.create(todoText));
  };
  self.deleteToDo = function(item) {
    self.todos.splice(self.todos.indexOf(item),1);
  };

}]);
