toDoApp.controller("ToDoController", function() {
  this.todos = [{task: "ToDo1", completed: true}, {task: "ToDo2", completed:false}];
  this.addToDo = function (todoText){
    this.todos.push({task: todoText, completed:false})
  }
  this.deleteToDo = function(item) {
    this.todos.splice(this.todos.indexOf(item),1);
  }
});
