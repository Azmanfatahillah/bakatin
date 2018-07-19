import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import { SearchPelatihPage } from "../search-pelatih/search-pelatih";

// import {SearchCarsPage} from "../search-cars/search-cars";

@Component({
  selector: 'page-course-awal',
  templateUrl: 'course-awal.html'
})

export class CourseAwalPage {

  constructor(public navCtrl: NavController) {

  }

  goToSearch()
  {
     this.navCtrl.setRoot(SearchPelatihPage)
  }
}
