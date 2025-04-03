import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'dark-mode-toggle',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.sass']
})
export class DarkModeToggleComponent {
  
  constructor(private _darkModeService: DarkModeService) {}

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
}