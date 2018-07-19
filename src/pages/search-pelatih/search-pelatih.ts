import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-search-pelatih',
  templateUrl: 'search-pelatih.html'
})
export class SearchPelatihPage {

  constructor(public navCtrl: NavController) {

  }

  goToSearch()
  {
    //  this.navCtrl.setRoot(SearchPelatihPage)
  }
}
