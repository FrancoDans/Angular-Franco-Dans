import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './models/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  root_url= "https://62b389204f851f87f45c72df.mockapi.io/api/v1/users"
  constructor(private http: HttpClient) { }


  getUserList(): Observable<Users[]>{
    return this.http.get<Users[]>(this.root_url)
  }
}
