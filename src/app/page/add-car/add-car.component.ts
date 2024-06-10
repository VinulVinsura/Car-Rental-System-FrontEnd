import { Component } from '@angular/core';
import { NavBarAdminComponent } from '../../common/nav-bar-admin/nav-bar-admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-add-car',
  standalone: true,
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css',
  imports: [NavBarAdminComponent, FormsModule, CommonModule, HttpClientModule],
})
export class AddCarComponent {
  brands: any = ['BMW', 'AUDI', 'TESLA', 'VOLVO', 'TOYOTA', 'HONDA', 'FERRARI'];
  types: any = ['Petrol', 'Hybrid', 'Diesel', 'Electric', 'CNG'];
  Colors: any = ['Red', 'White', 'Blue', 'Black', 'Grey', 'Silver', 'Orange'];
  transmissions: any = ['Manual', 'Automatic'];
  selectImg: any = '';
  url: any = '';
  isSelected = false;
  selecedFile: any = null;
  car: any = {
    brand: null,
    name: null,
    type: null,
    transmission: null,
    color: null,
    year: null,
    description: null,
    price: null,
    image: null,
  };

  constructor(private http: HttpClient) {}

  isSelectImg(e: any) {
    this.selecedFile = e.target.files[0];
    this.car.image = this.selecedFile;
    this.preViewImg();
    this.isSelected = true;
  }

  preViewImg() {
    const reader = new FileReader();
    reader.onload = () => {
      this.url = reader.result;
    };
    reader.readAsDataURL(this.selecedFile);
  }

  addCar() {
    const formData: FormData = new FormData();
    formData.append('brand', this.car.brand);
    formData.append('name', this.car.name);
    formData.append('type', this.car.type);
    formData.append('transmission', this.car.transmission);
    formData.append('color', this.car.color);
    formData.append('year', this.car.year);
    formData.append('description', this.car.description);
    formData.append('price', this.car.price);
    formData.append('image', this.car.image);
    console.log(formData);
    console.log(this.car.image.name)
    this.http
      .post('http://localhost:9001/api/car/add-car', formData, {
        reportProgress:true,
        observe: 'body',
        
      }).pipe(
        catchError(this.handleError)
      ).subscribe((data) => {
        console.log(data);
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again.');
  }
}
