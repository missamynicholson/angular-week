toDoApp.controller("ToDoController", ["toDoFactory", "Retriever","$http", function (toDoFactory, Retriever, $http) {
  var self = this;
  self.todos = [{task: "ToDo1", completed: true}, {task: "ToDo2", completed:false}];
  self.addToDo = function (todoText){
    self.todos.push(toDoFactory.create(todoText));
  };
  self.deleteToDo = function(item) {
    self.todos.splice(self.todos.indexOf(item),1);
  };

  console.log($http.get("http://quiet-beach-24792.herokuapp.com/todos.json"))

  JSON.parse(Retriever.getAll()).forEach(function(item){
    self.addToDo(item['text'])
  })
}]);
