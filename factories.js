toDoApp.factory("toDoFactory", function () {
  return {
    create: function(taskString) {
      return {task: taskString, completed: false};
    }
  };
});
