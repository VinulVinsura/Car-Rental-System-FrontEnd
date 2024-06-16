import { Component } from '@angular/core';
import { NavBarAdminComponent } from "../../common/nav-bar-admin/nav-bar-admin.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-search-car',
    standalone: true,
    templateUrl: './search-car.component.html',
    styleUrl: './search-car.component.css',
    imports: [NavBarAdminComponent,FormsModule,CommonModule,HttpClientModule]
})
export class SearchCarComponent {

  brands: any = ['BMW', 'AUDI', 'TESLA', 'VOLVO', 'TOYOTA', 'HONDA', 'FERRARI'];
  types: any = ['Petrol', 'Hybrid', 'Diesel', 'Electric', 'CNG'];
  Colors: any = ['Red', 'White', 'Blue', 'Black', 'Grey', 'Silver', 'Orange'];
  transmissions: any = ['Manual', 'Automatic'];

  searchCarDto:any={
    brand:"",
    type:"",
    color:"",
    transmission:""
  }

  public carDetailsList:any=[]

  constructor(private http:HttpClient){}

  searchCar(){
    console.log(this.searchCarDto);
    this.http.post("http://localhost:9001/api/car/search-car",this.searchCarDto).subscribe((res)=>{
      console.log(res);
      this.carDetailsList=res;
      if(this.carDetailsList.length==0){
        Swal.fire({
          icon: "error",
          title: "Invalid Input !..",
          text: "Something went wrong!",
        
        });
      }
      this.carDetailsList.forEach((element:any)=>{
        element.img="data:image/jpeg;base64," +element.img;
      })
      
    })
  }


}
