import { Component } from '@angular/core';
// import {NavController, PopoverController} from "ionic-angular";
// import {Storage} from '@ionic/storage';

// import { HomePage } from "../home/home";
import { TripsPage } from "../trips/trips";
// import { NotificationsPage } from "../notifications/notifications";
// import { SearchLocationPage } from "../search-location/search-location";
// import { SettingsPage } from "../settings/settings";
import { CourseAwalPage } from "../course-awal/course-awal";
import { EventPage } from "../event/event";

// import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TripsPage;
  tab2Root = CourseAwalPage;
  tab3Root = null;
  tab4Root = EventPage;

}
