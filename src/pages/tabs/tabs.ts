import { Component } from '@angular/core';
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import { HomePage } from "../home/home";
import { TripsPage } from "../trips/trips";
import { NotificationsPage } from "../notifications/notifications";
import { SearchLocationPage } from "../search-location/search-location";
import { SettingsPage } from "../settings/settings";

// import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TripsPage;
  tab2Root = SearchLocationPage;
  tab3Root = null;
  tab4Root = NotificationsPag;
  tab5Root = SettingsPage;

  constructor(public nav: NavController) {
  }

  // constructor(private camera: Camera) {
  //
  // }
  //
  // openCamera() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //
  //   this.camera.getPicture(options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64:
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     // Handle error
  //   });
  // }
}
