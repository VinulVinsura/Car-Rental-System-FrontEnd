import { Component } from '@angular/core';
import { NavBarCustomerComponent } from "../../common/nav-bar-customer/nav-bar-customer.component";
import { NavBarAdminComponent } from "../../common/nav-bar-admin/nav-bar-admin.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [NavBarAdminComponent]
})
export class AdminComponent {

}
