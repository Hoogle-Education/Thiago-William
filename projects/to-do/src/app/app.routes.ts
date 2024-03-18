import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
  },
  {
    path: 'todo',
    loadChildren: () => import('./components/todo/todo.routes').then(m => m.TODO_ROUTES)
  },
];
