import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { AdminComponent } from './page/admin/admin.component';
import { CustomerComponent } from './page/customer/customer.component';


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
  }
 

];

