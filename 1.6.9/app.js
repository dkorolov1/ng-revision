// Create the app
var app = angular.module('toDoListApp', []);

// Controller to manage the to-do list
app.controller('ToDoListController', $scope => {
    // Initial list of tasks (to-dos)
    $scope.todos = [
        { text: 'Learn AngularJS 1.6', completed: false },
        { text: 'Build a To-Do App', completed: false }
    ];

    // Add a new task to the list
    $scope.addTodo = () => {
        if ($scope.newTodoText) {
            $scope.todos.push({
                text: $scope.newTodoText,
                completed: false
            });
            $scope.newTodoText = ''; // Clear the input field
        }
    };

    // Remove a task from the list
    $scope.removeTodo = index => {
        $scope.todos.splice(index, 1); // Remove the task at the given index
    };
});