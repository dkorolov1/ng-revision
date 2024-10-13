import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class TodoListComponent {
  newTodoText = '';
  
  todos: Todo[] = [
    { text: 'Learn Angular', completed: false },
    { text: 'Build a To-Do App', completed: false }
  ];

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({ text: this.newTodoText, completed: false });
      this.newTodoText = ''; // Clear input field
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}