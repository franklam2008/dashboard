import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsonplaceUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  chartData: number[] = [85, 72, 78, 75, 77, 75];

  getUsers() {
    return this.http.get<User[]>(this.jsonplaceUrl);
  }

  getChartData() {
    return this.chartData;
  }
}
