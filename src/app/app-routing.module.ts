import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './userModule/register/register.component';
import { LoginComponent } from './userModule/login/login.component';
import { ForgotComponent } from './userModule/forgot/forgot.component';
import { HomeComponent } from './userModule/home/home.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
