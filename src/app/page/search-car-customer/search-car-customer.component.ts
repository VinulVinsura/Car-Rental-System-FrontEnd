import { Component } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-search-car-customer',
    standalone: true,
    templateUrl: './search-car-customer.component.html',
    styleUrl: './search-car-customer.component.css',
    imports: [NavBarCustomerComponent,FormsModule,CommonModule,HttpClientModule]
})
export class SearchCarCustomerComponent {

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
    
  }

}
