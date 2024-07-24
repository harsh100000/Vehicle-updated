import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {
  onClick(){
    document.addEventListener("DOMContentLoaded", (event: Event): void => {
      const deleteButton = document.getElementById('deleteButton');
      if (deleteButton) {
          deleteButton.click();
      }
  });
  }
}
