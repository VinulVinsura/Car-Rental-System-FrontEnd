import { Component } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-search-car-customer',
    standalone: true,
    templateUrl: './search-car-customer.component.html',
    styleUrl: './search-car-customer.component.css',
    imports: [NavBarCustomerComponent,FormsModule,CommonModule,HttpClientModule]
})
export class SearchCarCustomerComponent {


  constructor(private http:HttpClient){}

  brands: any = ['BMW', 'AUDI', 'TESLA', 'VOLVO', 'TOYOTA', 'HONDA', 'FERRARI'];
  types: any = ['Petrol', 'Hybrid', 'Diesel', 'Electric', 'CNG'];
  Colors: any = ['Red', 'White', 'Blue', 'Black', 'Grey', 'Silver', 'Orange'];
  transmissions: any = ['Manual', 'Automatic'];

  carDetailsList:any=[];

  searchCarDto:any={
    brand:"",
    type:"",
    color:"",
    transmission:""
  }
  
  searchCar(){
     this.http.post("http://localhost:9001/api/car/customer/search-car",this.searchCarDto).subscribe((data)=>{
           this.carDetailsList=data;
           this.carDetailsList.forEach((element:any)=>{
                element.img="data:image/jpeg;base64," +element.img
           })
           
     })
  }

}
