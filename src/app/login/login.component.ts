// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../interfaces/login';
import { VehicleService } from '../services/vehicle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: Login = {
    Email: '',
    Password: ''
  };

  constructor(private vehicleService: VehicleService, private toastr: ToastrService) {}

  onSubmit(form: NgForm): void {
    console.log(form.value);

    if (form.valid) {
      this.vehicleService.loginUser(this.model).subscribe(
        response => {
          console.log('User logged in successfully:', response);
          this.toastr.success('Logged in successfully');
          // Handle success response
        },
        error => {
          console.error('Error logging in user:', error);
          this.toastr.error('Error occured');
          // Handle error response
        }
      );
    }
  }
}
