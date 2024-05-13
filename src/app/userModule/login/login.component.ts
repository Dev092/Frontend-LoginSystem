import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user:User=new User();
  constructor(private userservice: UserServiceService, private router: Router){}
  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
    this.userservice.loginUser(this.user).subscribe(data=>{
      alert("Login Sucessful")
      this.router.navigate(['/home']);
    },error=>alert("Sorry you are not in"));
  }
}
