import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";

import {TabsPage} from "../tabs/tabs";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsPage {
    constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {}
    masuk() {
      this.nav.setRoot(TabsPage);
    }

    // login and go to home page
    // login() {
    //   this.nav.setRoot(NotificationsPage);
    // }
  close() {
    this.viewCtrl.dismiss();
  }
}
