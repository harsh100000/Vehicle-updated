import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private visible = false;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  isVisible(): boolean {
    return this.visible;
  }
}
