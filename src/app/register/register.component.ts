import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected styleUrls
})
export class RegisterComponent {
  constructor(private vehicleService: VehicleService, private toastr: ToastrService) { }

  onSubmit(vehicleForm: NgForm) {
    console.log(vehicleForm);
    
    if (vehicleForm.valid) {
      this.vehicleService.registerUser(vehicleForm.value).subscribe(
        response => {
          console.log('Registration successful', response);
          if(response.message==="User registered successfully")
          {
            this.toastr.success('Account created successfully');
          }
        },
        error => {
          console.error('Error during registration', error);
          this.toastr.error('Error occured');
        }
      );
    }
  }
}
