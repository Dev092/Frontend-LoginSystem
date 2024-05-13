import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  user: User = new User();
 
  constructor(private userService: UserServiceService, private router : Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  onSubmit() {
    this.userService.createuser(this.user).subscribe(
      response => {
        console.log('Data submitted successfully:', response);
      },
      error => {
        console.error('Error occurred while submitting data:', error);
      }
    );
    this.router.navigate(['/login']);
  }

}
