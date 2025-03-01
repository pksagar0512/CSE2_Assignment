import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
    menuOpen = false;
  
    // Toggle Mobile Menu
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  
    // Search Functionality
    logSearch(event: Event) {
      const inputValue = (event.target as HTMLInputElement).value;
      console.log("User searched:", inputValue);
    }
  
    // Logout Confirmation
    confirmLogout() {
      if (confirm("Are you sure you want to logout?")) {
        console.log("User logged out");
      }
    }
}
