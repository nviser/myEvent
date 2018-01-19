import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
    confirmationCode: any;
    isWarnShow: any = false;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeModal() {
      this.viewCtrl.dismiss({'code': this.confirmationCode});
  }

  checkCode() {
    if(this.confirmationCode && this.confirmationCode.length == 5) {
      this.closeModal();
    } else {
      this.isWarnShow = true;
    }

  }

}
