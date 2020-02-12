import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface ItoDo {
  id: number;
  content: string;
  complete: boolean;
}
let idTodo = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<ItoDo> = [];

  constructor() { }

  ngOnInit(): void {
  }
  onChange() {
  const {value} = this.userInput;
  if (value) {
    const todo: ItoDo = {
      id: idTodo++,
      content: value,
      complete: false
    };
    this.todos.push(todo);
    this.userInput.setValue('');
  }
  }
  toggleTodo(i){
    this.todos[i].complete = !this.todos[i].complete;
  }
}
