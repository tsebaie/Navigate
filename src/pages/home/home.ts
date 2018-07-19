import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReportPage} from '../../pages/report/report';
import Navi from '../../app/array';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  submit(Name,Surname,Gender,IdNo,Nationality,StreetName,City,Province,PostalCode,EmailAdress){
    Navi[0] = Name;
    Navi[1] =Surname;
    // Navi[2] =Gender;
    // Navi[3] =IdNo;
    // Navi[4] =Nationality;
    // Navi[5] =StreetName;
    // Navi[6] =City;
    // Navi[7] =Province;
    // Navi[8] =PostalCode;
    // Navi[9] =EmailAdress;
    this.navCtrl.push(ReportPage)
  }
  

}
