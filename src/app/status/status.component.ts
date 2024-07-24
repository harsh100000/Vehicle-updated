import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  cars: Car[] = [];

  constructor(private carService: CarService, private router:Router) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  confirmLogout() {
    // Perform logout actions here
    this.router.navigate(['/']);
    // Add your logout logic here (e.g., clearing session, redirecting)
  }

}
