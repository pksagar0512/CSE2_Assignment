import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [NavbarComponent, RouterModule], // Import Navbar & RouterModule
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router) {}

  validateRegister(event: Event) {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("register-email") as HTMLInputElement).value.trim();
    const password = (document.getElementById("register-password") as HTMLInputElement).value.trim();
    const confirmPassword = (document.getElementById("confirm-password") as HTMLInputElement).value.trim();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    this.router.navigate(['/user']); // Navigate using Router
  }
}
