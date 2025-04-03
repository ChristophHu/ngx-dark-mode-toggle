import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from "../../../../../ngx-dark-mode-toggle/src/lib/dark-mode-toggle.component";

@Component({
  selector: 'app-overview',
  imports: [
    CommonModule,
    DarkModeToggleComponent
],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent {
  
  constructor() {}

}
