toDoApp.controller("ToDoController", ["toDoFactory", function (toDoFactory) {
  var self = this;
  self.todos = [{task: "ToDo1", completed: true}, {task: "ToDo2", completed:false}];
  self.addToDo = function (todoText){
    self.todos.push(toDoFactory.create(todoText));
  };
  self.deleteToDo = function(item) {
    self.todos.splice(self.todos.indexOf(item),1);
  };
}]);
