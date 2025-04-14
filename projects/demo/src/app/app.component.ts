import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService, DarkModeToggleComponent, Theme } from '../../../ngx-dark-mode-toggle/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    DarkModeToggleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [
    DarkModeService
  ]
})
export class AppComponent {
  private _darkModeService: DarkModeService

  constructor(@Inject(DarkModeService) _darkModeService: DarkModeService) {
    this._darkModeService = _darkModeService
  }

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
  getTheme(): Observable<Theme> {
    return this._darkModeService.theme$
  }
}
