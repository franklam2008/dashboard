

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsonplaceUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.jsonplaceUrl);
  }
}
