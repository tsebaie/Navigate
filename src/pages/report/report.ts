import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import Navi from '../../app/array';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Name = Navi[0];
  Surname=Navi[1];
  // Gender=Navi[2];
  // IdNo=Navi[3];
  // Nationality= Navi[4];
  // StreetName=Navi[5];
  // City=Navi[6];
  // Province=Navi[7];
  // PostalCode=Navi[8];
  // EmailAdress=Navi[9];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}
