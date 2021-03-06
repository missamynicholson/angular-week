toDoApp.factory("toDoFactory", function () {
  return {
    create: function(taskString, completed) {
      return {task: taskString, completed: (typeof completed !== 'undefined') ? completed : false};
    }
  };
});
