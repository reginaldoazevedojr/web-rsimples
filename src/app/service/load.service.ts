import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor() { }

  public active = false;

  public show () {
    this.active = true;
  }

  public hide () {
    this.active = false;
  }
}
