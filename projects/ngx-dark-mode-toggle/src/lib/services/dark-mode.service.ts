import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models/theme'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  body: any

  private readonly _theme = new BehaviorSubject<Theme>('dark')
  theme$: Observable<any> = this._theme.asObservable()

  constructor() {
    this.body = document.body
    this._theme.next(this.body.dataset['theme'] || localStorage['theme'] || 'dark')

    this.theme$.subscribe({
      next: (theme: Theme) => {
        if (theme) {
          localStorage.setItem('theme', theme)
          this.body.dataset['theme'] = theme
        }
      },
      error: () => {
        console.error('Error setting theme in localStorage')
      },
      complete: () => {
        localStorage.removeItem('theme')
      }
    })
  }

  toggleTheme() {
    this._theme.next(this.body.dataset['theme'] == 'dark' ? 'light' : 'dark')
    // this.theme == 'light' ? this.theme = 'dark' : this.theme = 'light'

    // this.theme$.subscribe((theme: Theme) => {
    // switch (true) {
    //   case this.theme == 'dark':
    //     localStorage.setItem('theme', 'dark')
    //     // localStorage['theme'] = "dark"
    //     break
    //   case this.theme == 'light':
    //     localStorage.setItem('theme', 'light')
    //     // localStorage['theme'] = "light"
    //     break
    // }
    // this.body.dataset['theme'] = localStorage['theme']
  }

  // getTheme() {
  //   return this.theme
  // }
}
