import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../shared/types/todo';
import { ButtonPrimaryComponent } from '../../ui/button-primary/button-primary.component';
import { CreateTodoComponent } from '../create-todo/create-todo.component';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TableModule, DialogModule, ButtonPrimaryComponent, CreateTodoComponent],
  providers: [TodoService],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: Todo[] = [];
  isCreateDialogOpen = false

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

  showCreateDialog() {
    this.isCreateDialogOpen = true;
    console.log('should be true', this.isCreateDialogOpen)
  }

}
