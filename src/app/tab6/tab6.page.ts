import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() avatar: string;
  @Input() message: string;
  @Input() date: string;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    console.log('Modal');
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}