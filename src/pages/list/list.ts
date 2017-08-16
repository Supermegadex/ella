import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController, Events } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { SortPopup } from './popup';

import * as dictionary from './dictionary.json';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{name: string, definition: string, pos: string, type: string, page: number, img: string}>;
  dic: any = dictionary;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mc: ModalController, public popoverCtrl: PopoverController, private e: Events) {
    this.items = this.dic.words;
    this.e.subscribe("lmnop:sort", by => {
      this.only(by);
    })
  }

  itemTapped(event, item) {
    let word = this.mc.create(ItemDetailsPage, {
      item: item
    });
    word.present();
  }

  only(by) {
    if (by) {
      let words = [];
      for (let word of this.dic.words) {
        if (word.type == by) {
          words.push(word);
        }
      }
      this.items = words;
    }
    else this.items = this.items = this.dic.words;
  }

  sort(by) {

  }

  sortPopup(e) {
    let popover = this.popoverCtrl.create(SortPopup);
    popover.present({
      ev: e
    });
  }
}

// flash, flower, happy
