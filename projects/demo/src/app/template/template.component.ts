import { Component } from '@angular/core';
import { DarkModeToggleComponent } from '@christophhu/ngx-dark-mode-toggle';

@Component({
  selector: 'app-template',
  imports: [
    DarkModeToggleComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {

}
