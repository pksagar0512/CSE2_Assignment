import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [NavbarComponent, RouterModule], // Import Navbar & RouterModule
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  validateLogin(event: Event) {
    event.preventDefault();
    const email = (document.getElementById("login-email") as HTMLInputElement).value.trim();
    const password = (document.getElementById("login-password") as HTMLInputElement).value.trim();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return;
    }

    this.router.navigate(['/user']); // Navigate using Router
  }
}
