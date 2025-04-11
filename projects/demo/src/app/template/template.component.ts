import { Component, Inject } from '@angular/core';
import { DarkModeService, DarkModeToggleComponent, Theme } from '../../../../ngx-dark-mode-toggle/src/public-api';
import { Observable } from 'rxjs';
// import { DarkModeService, DarkModeToggleComponent, Theme } from '@christophhu/ngx-dark-mode-toggle';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    DarkModeToggleComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass',
  providers: [
    DarkModeService
  ]
})
export class TemplateComponent {
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
