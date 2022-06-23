import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../models/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: Users[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUserList().subscribe(
      (data)=>{
        this.userList=data;
      }
      )
  }
}
