import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  currentUser = signal<User | null | undefined>(undefined);

  baseUrl = 'https://api.realworld.io';

  constructor() {}

  cadastrar(user: { username: string; email: string; password: string }) {
    return this.http
      .post<User>(`${this.baseUrl}/api/users`, { user: { ...user } })
      .pipe(
        tap( (user) => {
          localStorage.setItem('token', user.token)
          this.currentUser.set(user)
        })
      );
  }
}
