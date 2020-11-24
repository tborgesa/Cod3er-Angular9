import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private _isDark = new BehaviorSubject<boolean>(false)

  constructor() { }

  get isDark(): boolean {
    return this._isDark.value
  }

  set isDark(isDark: boolean) {
    this._isDark.next(isDark)
  }
}
