import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { Plugins } from '@capacitor/core';

const { Toast } = Plugins;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private auth: AuthProvider) {  }

  ionViewDidLoad() {  }

  async save() {
    try {
      const result = await this.auth.createAccount(this.email, this.password);

      if (result) {
        this.navCtrl.setRoot(HomePage);
      }

    } catch (error) {
      await Toast.show({text: 'Ocorreu um erro ao processar sua solicitação!'});
    }
  }

}
