import {Injectable} from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { repeat, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private arrayItems = [];
  private _currentNotifications$ = new BehaviorSubject([]);
  public currentNotifications = this._currentNotifications$.asObservable();

  getData(): string[] {
    // return this.arrayItems;
    return this._currentNotifications$.getValue();
  }

  addData(title: string): void {
    const value: any = {id: new Date().getTime(), title}
    this._currentNotifications$.next([...this._currentNotifications$.getValue(), value]);
    console.log("addData", this._currentNotifications$.getValue());
  }

  removeItem(id: number): void {
    console.log("removeItem", this._currentNotifications$.getValue());
    // const value = this._currentNotifications$.value.filter(item => item.id !== id);
    // console.log("value!!!", value);
    // this._currentNotifications$.next(value);
  }
}




