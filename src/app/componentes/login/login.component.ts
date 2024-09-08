import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  email: string;
  password: string;
  private toastr: ToastrService;

  constructor(
    private router: Router,
    private loginService: LoginService
  ){}

  login(){
    this.loginService.login(this.email, this.password)
    .then( () => {
      this.router.navigate(['/empleados']);
      })
    .catch(error =>{
      console.log(error);
    });
  }
}