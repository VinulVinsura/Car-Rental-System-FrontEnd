import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { LoginComponent } from "./page/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, LoginComponent]
})
export class AppComponent {
  title = 'car-rental-app';
}
