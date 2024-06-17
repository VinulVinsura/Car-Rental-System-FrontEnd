import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-admin.component.html',
  styleUrl: './nav-bar-admin.component.css',
})
export class NavBarAdminComponent {
  timerInterval: any;
  timer: any;

  constructor(private route:Router){}

  logOut() {
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        this.timer = Swal.getPopup()?.querySelector('b');
        this.timerInterval = setInterval(() => {
          this.timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
        

      },
      willClose: () => {
        clearInterval(this.timerInterval);
        this.route.navigate(["/login"])
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }
}
