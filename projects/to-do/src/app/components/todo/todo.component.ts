import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  // todosList$: Observable<Todo[]>;

  constructor(/*private todoService: TodoService*/) {
    // this.todosList$ = this.todoService.getAll();
  }

}
