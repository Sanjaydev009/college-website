import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngIf

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    // Simple login: username "admin", password "admin123"
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}