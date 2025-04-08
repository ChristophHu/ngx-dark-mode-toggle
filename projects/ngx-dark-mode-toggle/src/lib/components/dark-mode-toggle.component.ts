import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'dark-mode-toggle',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DarkModeToggleComponent {
  
  constructor(private _darkModeService: DarkModeService) {}

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
}