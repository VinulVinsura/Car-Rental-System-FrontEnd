import { Component, OnInit } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { NavBarAdminComponent } from "../../common/nav-bar-admin/nav-bar-admin.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [NavBarAdminComponent,HttpClientModule,FormsModule,CommonModule]
})
export class AdminComponent implements OnInit {

    public carDetails:any="";
    cars:any=[];
     

    constructor(private http:HttpClient){}

    ngOnInit(){
       this.lodeCarDetails();
    }

    lodeCarDetails(){
        this.http.get("http://localhost:9001/api/car/get-all-cars").subscribe((data)=>{
            console.log(data);
            this.carDetails=data;
            this.carDetails.forEach((element:any) => {
                console.log(element.img)
                element.processedImg="data:image/jpeg;base64," +element.img;
                this.cars.push(element);
            });
           })
    }

}
