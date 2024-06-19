import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavBarCustomerComponent } from "../common/nav-bar-customer/nav-bar-customer.component";

@Component({
    selector: 'app-book-car',
    standalone: true,
    templateUrl: './book-car.component.html',
    styleUrl: './book-car.component.css',
    imports: [FormsModule, CommonModule, HttpClientModule, NavBarCustomerComponent]
})
export class BookCarComponent implements OnInit {

   userid:any=this.activeRoute.snapshot.params["userId"];
   carId:any=this.activeRoute.snapshot.params["carId"];
    
  constructor(private activeRoute:ActivatedRoute){}

  ngOnInit(){
     console.log(this.userid)
     console.log(this.carId); 
     
  }



}
