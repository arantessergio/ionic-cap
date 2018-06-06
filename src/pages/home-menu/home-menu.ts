import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home-menu',
  templateUrl: 'home-menu.html',
})
export class HomeMenuPage {

  functions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController) {
    this.functions = this.navParams.get('functions');
  }

  logout() {
    this.functions && this.functions.logout.call(this);
    this.viewCtrl.dismiss();
  }


}
