import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    { make: 'Toyota', model: 'Corolla', year: 2020, vin: '1234', status: 'In Service' },
    { make: 'Honda', model: 'Civic', year: 2019, vin: '5678', status: 'Completed' },
    { make: 'Ford', model: 'Focus', year: 2018, vin: '91011', status: 'Pending' },
  ];

  getCars() {
    return this.cars;
  }

  addCar(car: Car) {
    this.cars.push(car);
  }
}


export interface Car {
  make: string;
  model: string;
  year: number;
  vin: string;
  status: string;
}