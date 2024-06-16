import { Component, OnInit } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-customer',
    standalone: true,
    templateUrl: './customer.component.html',
    styleUrl: './customer.component.css',
    imports: [NavBarCustomerComponent,HttpClientModule,FormsModule,CommonModule]
})
export class CustomerComponent implements OnInit{
    public Base_Url:any="http://localhost:9001";
    public carList:any=[];

    ngOnInit(): void {
          this.getAllCarDetails();
    }

    constructor(private http:HttpClient){}

    getAllCarDetails(){
        this.http.get(this.Base_Url+"/api/car/customer/get-car").subscribe((res)=>{
            this.carList=res;
            this.carList.forEach((element:any)=>{
                element.img="data:image/jpeg;base64," +element.img;
            })
        })
    }

}
