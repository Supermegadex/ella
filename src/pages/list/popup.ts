import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Sort Dictionary</ion-list-header>
      <button ion-item (click)="sort()">Everything</button>
      <button ion-item (click)="sort('coinage')">Coinages</button>
      <button ion-item (click)="sort('euphemism')">Euphemism Phrases</button>
      <button ion-item (click)="sort('unknown')">Didn't Know</button>
    </ion-list>
  `
})

export class SortPopup {
  mainSort;
  constructor(public view: ViewController, private params: NavParams, private e: Events) {
    this.mainSort = params.get('sort');
  }

  sort(by) {
    this.e.publish("lmnop:sort", by);
    this.close();
  }

  close() {
    this.view.dismiss();
  }
}
