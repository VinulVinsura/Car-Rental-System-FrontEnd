import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import e, { response } from 'express';
import { text } from 'stream/consumers';
import Swal from 'sweetalert2';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { StorageService } from '../../storage/storage.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, RouterLink, NavBarComponent]
})
export class LoginComponent {
  constructor(private http: HttpClient, private route:Router , private storageService:StorageService) {}

  loginDetails: any = {
    email: null,
    password: null,
  };

  login() {
    this.http
      .post('http://localhost:9000/api/login/validation', this.loginDetails)
      .subscribe((data: any) => {
        console.log(data)
          if(data!= null){
            if(data.userRole=="Admin"){
                this.route.navigate(['/admin'])
                this.storageService.setUserId(data.id);
            }else{
              this.route.navigate(["/customer"])
              this.storageService.setUserId(data.id);
            }
            
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
