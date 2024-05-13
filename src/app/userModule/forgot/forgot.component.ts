import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent implements OnInit{
  user: User=new User();
  constructor(private userservice: UserServiceService, private router: Router){}

  ngOnInit(): void {
  }

  getUser(){

  }

  userForgot(){
   console.log(this.user.password);
   this.userservice.updatePassword(this.user);
   alert("Password changed successfully");
  }




}
