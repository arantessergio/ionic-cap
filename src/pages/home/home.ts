import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { HomeMenuPage } from '../home-menu/home-menu';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController, private auth: AuthProvider) {  }

  showMenu(event) {
    const popover = this.popoverCtrl.create(HomeMenuPage, {functions: { logout: this.showLogoutModal }});
    popover.present({ev: event});
  }

  showLogoutModal = async () => {
    const result: any = await Modals.showActions({
      title: 'Sair',
      message: 'Deseja efetuar o log out?',
      options: [{
        title: 'Sim',
      }, {
        title: 'Não'
      }]
    });
    if (result) {
      if (result && result.index === 0) {
        this.logout();
      }
    }
  }

  async logout() {
    try {
      const result = await this.auth.logout();
      if (result) {
        this.navCtrl.setRoot(LoginPage);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
