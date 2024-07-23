import { Component } from '@angular/core';
import { CarService, Car } from '../services/car.service';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  car: Car = {
    make: '',
    model: '',
    year: new Date().getFullYear(),
    vin: '',
    status: 'Pending'
  };

  constructor(private carService: CarService, private popupService: PopupService) {}

  onSubmit() {
    this.carService.addCar(this.car);
    this.popupService.hide();
  }
}
