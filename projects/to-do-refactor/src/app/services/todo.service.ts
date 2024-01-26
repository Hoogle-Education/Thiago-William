import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todo } from '../shared/types/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API = 'http://localhost:3333'

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Todo[]>(`${this.API}/todos`)
  }

  getById(identifier: string) {
    return this.httpClient.get<Todo>(`${this.API}/todos/${identifier}`)
  }
}
