import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DarkModeToggleComponent } from "../../../../../ngx-dark-mode-toggle/src/lib/components/dark-mode-toggle.component";
// import { DarkModeService } from '../../../../../ngx-dark-mode-toggle/src/lib/services/dark-mode.service';
import { DarkModeToggleComponent } from '@christophhu/ngx-dark-mode-toggle'
import { DarkModeService } from '@christophhu/ngx-dark-mode-toggle'

@Component({
  selector: 'app-overview',
  imports: [
    CommonModule,
    DarkModeToggleComponent
],
  providers: [
    DarkModeService
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent {
  
  constructor(@Inject(DarkModeService) private _darkModeService: DarkModeService) {}

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
}