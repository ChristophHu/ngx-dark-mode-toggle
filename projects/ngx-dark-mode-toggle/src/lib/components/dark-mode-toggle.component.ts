import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { Observable } from 'rxjs';
import { Theme } from '../models/theme';

@Component({
  selector: 'dark-mode-toggle',
  standalone: true,
  imports: [
    AsyncPipe,
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
  getTheme(): Observable<Theme> {
    return this._darkModeService.theme$
  }
}