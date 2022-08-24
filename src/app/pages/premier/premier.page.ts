import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-premier',
  templateUrl: './premier.page.html',
  styleUrls: ['./premier.page.scss'],
})
export class PremierPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.nav.navigateForward("/tabs/home");
    }, 2000);
  }
}
