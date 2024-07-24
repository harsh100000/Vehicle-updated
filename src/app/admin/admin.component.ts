import { Component } from '@angular/core';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  showStatusTable = false;

  constructor(public popupService: PopupService) {}

  openAddCar() {
    this.popupService.show();
  }

  showStatus() {
    this.showStatusTable = true;
  }
}

