import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavBarAdminComponent } from "../../common/nav-bar-admin/nav-bar-admin.component";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-update-page',
    standalone: true,
    templateUrl: './update-page.component.html',
    styleUrl: './update-page.component.css',
    imports: [FormsModule, CommonModule, HttpClientModule, NavBarAdminComponent,RouterLink]
})
export class UpdatePageComponent implements OnInit {

  carId:any=this.activateRoutes.snapshot.params["id"];
  

  brands: any = ['BMW', 'AUDI', 'TESLA', 'VOLVO', 'TOYOTA', 'HONDA', 'FERRARI'];
  types: any = ['Petrol', 'Hybrid', 'Diesel', 'Electric', 'CNG'];
  Colors: any = ['Red', 'White', 'Blue', 'Black', 'Grey', 'Silver', 'Orange'];
  transmissions: any = ['Manual', 'Automatic'];

  car: any =null;
 


  constructor(private http:HttpClient, private activateRoutes:ActivatedRoute, private route:Router ){}

  ngOnInit(): void {
    
    this.getCarById();
  }

  getCarById(){
    this.http.get("http://localhost:9001/api/car/get-carById/"+this.carId).subscribe((res)=>{
      this.car=res;
      this.car.img="data:image/jpeg;base64,"+this.car.img;
      
    })
  }

  updateCarDetails(){
      
      const updateCarObj={
        id:this.car.id,
        brand:this.car.brand,
        name:this.car.name,
        type: this.car.type,
        transmission:this.car.transmission,
        color: this.car.color,
        year: this.car.year,
        description: this.car.description,
        price: this.car.price,
      }
      

      this.http.put("http://localhost:9001/api/car/update-car",updateCarObj).subscribe((data)=>{
        console.log(data);
        Swal.fire({
          title: ` "${updateCarObj.brand} - ${updateCarObj.name}" is update successfully !`,
          text: 'You clicked the button!',
          icon: 'success',
        });
        this.route.navigate(['/admin'])
      })
    
  }

  

}
