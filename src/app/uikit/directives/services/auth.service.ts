import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter, iif,
  map,
  mergeMap,
  Observable, of
} from 'rxjs';

export type Role = 'admin' | 'moderator';

export interface Auth {
  token: string;
  role: Role;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data$ = new BehaviorSubject<Auth | null>(null)


  login() {
    // http
    this.data$.next({
      token: 'jpjpiwjfpewjf', role: 'admin'
    })
  }

  logout() {
    this.data$.next(null);
  }

  get isLogged$(): Observable<boolean> {
    return this.data$
      .pipe(
        map(data => !!data),
        distinctUntilChanged(),

      )
  }


  get role$(): Observable<Role | undefined> {
    return this.data$
      .pipe(
        map(data => data?.role),
      )
  }
}
