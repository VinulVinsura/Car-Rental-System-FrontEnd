import { Component, OnInit } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

import { StorageService } from '../../storage/storage.service';

@Component({
    selector: 'app-book-car',
    standalone: true,
    templateUrl: './book-car.component.html',
    styleUrl: './book-car.component.css',
    imports: [NavBarCustomerComponent,FormsModule,CommonModule,HttpClientModule]
})
export class BookCarComponent implements OnInit{

    carId:any=this.activeRouter.snapshot.params["carId"];
    
    carObj:any="";
    formData:any=""
    toData:any=""
    

    constructor(private activeRouter:ActivatedRoute, private http:HttpClient ,private route:Router, private storageService:StorageService){}
   
    ngOnInit() {
        this.getCarById()
        
       }

    getCarById(){
        
        this.http.get("http://localhost:9001/api/car/customer/get-car-byId/"+this.carId).subscribe((res)=>{
          
            this.carObj=res;
            this.carObj.img="data:image/jpeg;base64,"+this.carObj.img;
        })
    }

    bookCar(){

       const bookCarObj:any={
            fromDate:this.formData,
            toDate:this.toData,
            price:this.carObj.price,
            userId:this.storageService.getUserId(),
            carId:this.carId
        }

        this.http.post("http://localhost:9002/api/book-car/save-car",bookCarObj).subscribe((res)=>{
            if(res!=null){
                Swal.fire({
                    title: `"${this.carObj.brand}" Car Book Successfully ..!`,
                    text: "You clicked the button!",
                    icon: "success"
                    
                  });
                  this.route.navigate(['/customer']);
            }
            
                   
            })

    }

}
