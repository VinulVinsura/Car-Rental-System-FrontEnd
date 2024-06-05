import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import e, { response } from 'express';
import { text } from 'stream/consumers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private http: HttpClient, private route:Router) {}

  loginDetails: any = {
    email: null,
    password: null,
  };

  login() {
    console.log(this.loginDetails);
    this.http
      .post('http://localhost:9000/api/login/validation', this.loginDetails, {
        responseType: 'text',
      })
      .subscribe((data: any) => {
          if(data=="true"){
             this.route.navigate(['/home'])
          }else{
            Swal.fire({
              title: "Invalid Email or Password !",
              text: " ",
              icon: "error"
            });
            this.loginDetails = {
              email: null,
              password: null,
            };

          }
      });
  }
}
