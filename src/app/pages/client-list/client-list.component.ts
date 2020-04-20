import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  users$: User[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data =>
        this.users$ = data
      );
  }
  test() {
    console.log(this.users$);
  }
}
