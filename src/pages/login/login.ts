import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider) {
  }

  ionViewDidLoad() { }

  async login() {
    try {
      const result = await this.auth.authenticateWithEmail(this.email, this.password);

      if (result) {
        this.navCtrl.setRoot(HomePage);
      }

    } catch (error) {
      
      console.error(error);

    }
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
