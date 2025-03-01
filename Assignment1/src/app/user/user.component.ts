import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NavbarComponent, RouterModule], // Import Navbar & Router
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {}
