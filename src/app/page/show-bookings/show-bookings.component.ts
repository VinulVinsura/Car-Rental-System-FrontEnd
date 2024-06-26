import { Component, OnInit } from '@angular/core';
import { NavBarAdminComponent } from '../../common/nav-bar-admin/nav-bar-admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-show-bookings',
  standalone: true,
  templateUrl: './show-bookings.component.html',
  styleUrl: './show-bookings.component.css',
  imports: [NavBarAdminComponent, FormsModule, CommonModule, HttpClientModule],
})
export class ShowBookingsComponent implements OnInit {
  Bookings: any = [];
  userDetails: any = [];
  allBookings:any=[];
  user:any=''
  
 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.lodeAllBookings();
    console.log(this.allBookings);
    
   
  }

  lodeAllBookings() {
    
    this.http
      .get('http://localhost:9002/api/book-car/get-all-bookings')
      .subscribe((res) => {
        this.Bookings = res;
        this.Bookings.forEach((element: any) => {
          this.getUserDetails(element);
        });

      });
  }

  getUserDetails( booking:any) {
    this.http
      .get('http://localhost:9000/api/user/get-user-byId/' + booking.userId)
      .subscribe((res) => {
        this.user=res;
        const bookDetails = {
          username:this.user.username,
          email:this.user.email,
          bookings:booking
        };
        this.allBookings.push(bookDetails)    
      });
    }

    changeBookingStatus(bookingId:number , status:string):any {
       
       this.http.get(`http://localhost:9002/api/book-car/changStatus/${bookingId}/${status}`).subscribe((res)=>{
          console.log(res);
          this.allBookings=[];
          this.lodeAllBookings();
       })
      
    }
   
  
}
  //  <td>{{booking.bookings.fromDate | date: 'MMM d, y'}}</td>
  //<td>{{bookCar.toDate | date: 'MMM d, y'}}</td>