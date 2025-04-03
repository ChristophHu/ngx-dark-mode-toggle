import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  theme: Theme = 'light'
  body: any

  constructor() {
    this.body = document.body
    this.theme = this.body.dataset['theme'] || localStorage['theme'] || 'light'
  }

  toggleTheme() {
    this.theme == 'dark' ? this.theme = 'light' : this.theme = 'dark'

    switch (true) {
      case this.theme == 'dark':
        localStorage['theme'] = "dark"
        break
      case this.theme == 'light':
        localStorage['theme'] = "light"
        break
    }
    this.body.dataset['theme'] = localStorage['theme']
  }

  getTheme() {
    return this.theme
  }
}
