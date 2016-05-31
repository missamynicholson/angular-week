toDoApp.factory("toDoFactory", function () {
  return {
    create: function(taskString) {
      return {task: taskString, completed: (typeof completed !== 'undefined') ? completed : false};
    }
  };
});
