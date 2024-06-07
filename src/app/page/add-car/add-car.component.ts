import { Component } from '@angular/core';
import { NavBarAdminComponent } from "../../common/nav-bar-admin/nav-bar-admin.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerControl } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

import { MatLabel } from '@angular/material/form-field';




@Component({
    selector: 'app-add-car',
    standalone: true,
    templateUrl: './add-car.component.html',
    styleUrl: './add-car.component.css',
    imports: [NavBarAdminComponent,FormsModule,CommonModule,MatDatepickerModule,MatNativeDateModule, MatFormField]
})
export class AddCarComponent {
  brands:any=["BMW","AUDI","TESLA","VOLVO","TOYOTA","HONDA","FERRARI"]
  types:any=["Petrol","Hybrid","Diesel","Electric","CNG"]
  Colors:any=["Red","White","Blue","Black","Grey","Silver","Orange"]
  transmissions:any=["Manual","Automatic"]

  url="";
  isSelected=false;
 
  constructor(){}

  isSelectImg(e:any){
    if(e.target.files){
      this.isSelected=true;
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }

    }
  }


  

  

}
