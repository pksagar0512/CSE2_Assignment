// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { Component } from '@angular/core';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { UserComponent } from './user/user.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { AdminComponent } from './admin/admin.component';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports:[LoginComponent,
//     RegisterComponent,
//     ForgotPasswordComponent,
//     UserComponent,
//     EmployeeComponent,
//     AdminComponent]
// })
 
// // @NgModule({
// //   declarations: [
// //     AppComponent,
// //     LoginComponent,
// //     RegisterComponent,
// //     ForgotPasswordComponent,
// //     UserComponent,
// //     EmployeeComponent,
// //     AdminComponent
// //   ],
// //   imports: [BrowserModule],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// export class AppComponent { }
// export class AppModule { }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   currentComponent = 'login';
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent, ForgotPasswordComponent, UserComponent], // Add imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentComponent = 'login'; // Default component
}
