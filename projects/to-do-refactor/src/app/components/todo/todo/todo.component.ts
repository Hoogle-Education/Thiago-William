import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../shared/types/todo';
import { ButtonPrimaryComponent } from '../../ui/button-primary/button-primary.component';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TableModule, DialogModule, ButtonPrimaryComponent],
  providers: [TodoService],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: Todo[] = [];

  cols: Column[] = [
    { field: 'id', header: 'ID' },
    { field: 'description', header: 'Descrição' },
    { field: 'isCompleted', header: 'Realizado' },
  ];

  constructor(private todoService: TodoService) {
    this.todoService.getAll().subscribe((response) => {
      this.todos = response;
      console.log(this.todos);
    });
  }

  handleClick() {

  }

}
