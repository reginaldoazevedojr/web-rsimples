import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme = '';

  private darkThemeClass = 'dark-theme';

  constructor() { }

  /**
   * Toggle Theme between dark and light
   */
  public toggleTheme() {

    if (this.theme === '') {
      this.theme = this.darkThemeClass;
      return;
    }

    this.theme = '';
  }
}
