import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoComponent } from './todo.component';

export const TODO_ROUTES: Routes = [
  { path: '', component: TodoComponent },
  { path: '/create', component: CreateTodoComponent }
];
