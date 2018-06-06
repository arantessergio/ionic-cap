import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Plugins } from '@capacitor/core';

const { Toast } = Plugins;

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider) {
  }

  async send() {
    try {
        await this.auth.passwordRecovery(this.email);
        Toast.show({text: 'Verifique sua caixa de entrada!'});
    } catch (error) {
      Toast.show({text: 'Ocorreu um erro ao processar sua solicitação.'});
    }
  }

  
}
