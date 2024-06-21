import { Component, OnInit } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StorageService } from '../../storage/storage.service';

@Component({
    selector: 'app-my-booking',
    standalone: true,
    templateUrl: './my-booking.component.html',
    styleUrl: './my-booking.component.css',
    imports: [NavBarCustomerComponent,FormsModule,CommonModule,HttpClientModule]
})
export class MyBookingComponent implements OnInit {

  bookCarList:any=[]


  
     
  
  constructor(private http:HttpClient,   private storageService:StorageService){
          
  }
  
  ngOnInit() {
    this.getMyBookingList() 
  
   }
  
  

  
   getMyBookingList():any{ 
    const userId:any=this.storageService.getUserId();
    this.http.get("http://localhost:9002/api/book-car/findBy-userId/"+ userId).subscribe((res)=>{
      this.bookCarList=res;
    })
   }




}
