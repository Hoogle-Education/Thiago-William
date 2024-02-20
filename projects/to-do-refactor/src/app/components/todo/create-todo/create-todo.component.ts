import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { ButtonPrimaryComponent } from '../../ui/button-primary/button-primary.component';
import { ButtonModule } from 'primeng/button';
import { Todo } from '../../../shared/types/todo';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ButtonPrimaryComponent, DialogModule, ButtonModule, ReactiveFormsModule, AutoCompleteModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  @Input() todoId?: Todo;
  @Input() todos: Todo[] = [];

  todosFiltered: Todo[] = [];

  visible = true;
  createTodoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createTodoForm = this.fb.group({
      description: ['', Validators.required],
      moment: [null],
    });
  }

  handleClick() {

  }

  searchTodo(event: AutoCompleteCompleteEvent) {
    const { query } = event;

    this.todosFiltered = this.todos.filter((todo) =>
      todo.description.toUpperCase().startsWith(query.toUpperCase())
    );
  }
}
