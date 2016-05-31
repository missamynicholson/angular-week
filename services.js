toDoApp.service("Retriever", function(){
  this.getAll = function(){
    ('http://quiet-beach-24792.herokuapp.com/todos.json')
  }
});