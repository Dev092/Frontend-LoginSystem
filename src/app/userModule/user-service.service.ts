import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl="http://localhost:8080/user/login";
  private register="http://localhost:8080/user/users";


  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }

  createuser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.register}`,user);
  }

  getTransaction(id:number):Observable<User>{
    return this.httpClient.get<User>(`http://localhost:8080/user/${id}`);
  }

  updatePassword(user:User){
    return this.httpClient.post(`http://localhost:8080/user/login/update`,user);
  }
}
