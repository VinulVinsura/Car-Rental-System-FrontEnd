import { Component, OnInit } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-book-car',
    standalone: true,
    templateUrl: './book-car.component.html',
    styleUrl: './book-car.component.css',
    imports: [NavBarCustomerComponent,FormsModule,CommonModule,HttpClientModule]
})
export class BookCarComponent implements OnInit{

    carId:any=this.activeRouter.snapshot.params["carId"];
    userId:any=this.activeRouter.snapshot.params["userId"];
    carObj:any="";

    constructor(private activeRouter:ActivatedRoute, private http:HttpClient){}
    ngOnInit() {
        this.getCarById()
        console.log(this.carId)
    }

    getCarById(){
        this.http.get("http://localhost:9001/api/car/customer/get-car-byId/"+this.carId).subscribe((res)=>{
            console.log(res);
            this.carObj=res;
            this.carObj.img="data:image/jpeg;base64,"+this.carObj.img;
        })
    }

}
