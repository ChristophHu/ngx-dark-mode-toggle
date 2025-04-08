# Ngx-Dark-Mode-Toggle

## Frameworks and Languages
<p align="left">
  <img alt="Static Badge" src="https://img.shields.io/badge/19.2.0-000000?style=for-the-badge&logo=angular&logoColor=white&label=Angular&labelColor=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/4.1.3-000000?style=for-the-badge&logo=tailwindcss&logoColor=white&label=Tailwind&labelColor=06B6D4&color=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/5.6.2-000000?style=for-the-badge&logo=typescript&logoColor=white&label=Typescript&labelColor=007ACC&color=000000">
</p>

## Demo
<p align="center">
  <a href="https://christophhu.github.io/ngx-dark-mode-toggle"><img src="https://github.com/ChristophHu/ChristophHu/blob/main/assets/img/ngx-dark-mode-toggle.gif" width="500" alt="image" /></a>
</p>

## Description
This Repository contains a simple Angular library for toggling between light and dark mode. It is designed to be easy to use and integrate into any Angular application.
It uses the `localStorage` API to save the user's preference for dark mode, so that the setting persists across page reloads.

## Installation
```bash
npm i @christophhu/ngx-dark-mode-toggle
```

## Use
### With default toggle
```html
<dark-mode-toggle></dark-mode-toggle>
```

### With custom toggle
```html
<dark-mode-toggle>
  <input type="checkbox" class="toggle" id="toggle" (change)="toggleTheme()"/>
</dark-mode-toggle>
```

```typescript
import { DarkModeToggleComponent } from "@christophhu/ngx-dark-mode-toggle";
import { DarkModeService } from '@christophhu/ngx-dark-mode-toggle';

export class OverviewComponent {
  
  constructor(private _darkModeService: DarkModeService) {}

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
}
```

### Styling
You have to add your own style, use the default or add `default.css`. You can use the default style by adding the `default.css` file in `node_modules/@christophhu/ngx-dark-mode-toggle/lib/`. You have to import it to your `angular.json` file:
```json
"styles": [
  "src/styles.css",
  "node_modules/@christophhu/ngx-dark-mode-toggle/lib/default.css"
],
```

## License
This project is licensed under the MIT License.

The MIT License (MIT)
Copyright © 2025 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
