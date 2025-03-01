import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: []
})
export class ForgotPasswordComponent {
  email: string = '';

  onSubmit() {
    if (!this.email) {
      alert("Please enter your email!");
      return;
    }
    alert(`Password reset link sent to: ${this.email}`);
  }
}