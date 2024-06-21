import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  userId:any="";

  constructor() { }

   
   setUserId(id:any):any{
       this.userId=id;
   }

   getUserId(){
     return this.userId;
   }


   
}
