import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
    console.log('Menu active:', this.menuActive); // Debug log to check toggle functionality
  }
}
