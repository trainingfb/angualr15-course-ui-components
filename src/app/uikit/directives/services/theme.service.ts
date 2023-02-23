import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme$ = new  BehaviorSubject<Theme>('light');
  theme$ = this._theme$.asObservable();


  change(newTheme: Theme) {
    this._theme$.next(newTheme)
  }
}
