import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavBarComponent]
})
export class SignUpComponent {

  constructor(private http:HttpClient){}

  public user:any={
    username:null,
    email:null,
    password:null
  }

  public registerUser(){
    console.log(this.user);
    this.http.post("http://localhost:9000/api/user/add-user",this.user).subscribe((data)=>{
      console.log(data);
      if(data!=null){
        Swal.fire({
          title: "User Save Success !",
          text: "You clicked the button!",
          icon: "success"
        });
        this.user={
          username:null,
          email:null,
          password:null
        }
      }else{
        Swal.fire({
          icon: "error",
          title: "User Save Unsuccessfully !",
          text: "Something went wrong!",
        
        });
        this.user={
          username:null,
          email:null,
          password:null
        }
      }
    })

  }

}
