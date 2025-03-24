import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TmService {
  
  private _rx = new BehaviorSubject<any[]>([]);
  get subscribe(){
    return this._rx.asObservable();
  }

  constructor() { 
    fetch('/assets/PeriodicTableJSON.json')
      .then(response => response.json())
      .then(data => {
          this._rx.next(data.elements);
        });
  }


}
