import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { AdminComponent } from './page/admin/admin.component';
import { CustomerComponent } from './page/customer/customer.component';
import { AddCarComponent } from './page/add-car/add-car.component';
import { UpdatePageComponent } from './page/update-page/update-page.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'sign-up',
    component: SignUpComponent 
    
  },
  {
    path:"",
    redirectTo:"login",
    pathMatch:'full'
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"customer",
    component:CustomerComponent
  },
  {
    path:"add-car",
    component:AddCarComponent
  },
  {
    path:"update/:id",
    component:UpdatePageComponent
  }
 

];

