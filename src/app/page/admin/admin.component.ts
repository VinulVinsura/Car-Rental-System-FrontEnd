import { Component, OnInit } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { NavBarAdminComponent } from "../../common/nav-bar-admin/nav-bar-admin.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [NavBarAdminComponent,HttpClientModule,FormsModule,CommonModule,RouterLink]
})
export class AdminComponent implements OnInit {

    public carDetailsList:any=[];
    
    public selectCarObj:any;
     

    constructor(private http:HttpClient){}

    ngOnInit(){
       this.lodeCarDetails();
    }

    lodeCarDetails(){
        this.http.get("http://localhost:9001/api/car/get-all-cars").subscribe((data)=>{
            this.carDetailsList=data;
            this.carDetailsList.forEach((element:any) => {
                element.img="data:image/jpeg;base64," +element.img;
              });
           })
        
         console.log(this.carDetailsList)  
    }

    selectCar(obj:any){
          this.selectCarObj=obj
          console.log(this.selectCarObj)
      
     }

     deleteConfimationAlet(car:any){
        console.log(car)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                
                this.deleteCarObj(car)
            
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
             
            }
          });

     }

    deleteCarObj(car:any){
        this.http.delete("http://localhost:9001/api/car/delete-car/"+car.id,{responseType:"text"}).subscribe((res)=>{
            console.log(res);
            this.lodeCarDetails();
        })
    }

}
