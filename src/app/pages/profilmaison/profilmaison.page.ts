import { Component, OnInit } from '@angular/core';
import { AggrandirmaisonPage } from 'src/app/pages/aggrandirmaison/aggrandirmaison.page';
import { UtilsService } from "src/app/services/utils.service";
@Component({
  selector: 'app-profilmaison',
  templateUrl: './profilmaison.page.html',
  styleUrls: ['./profilmaison.page.scss'],
})
export class ProfilmaisonPage implements OnInit {

  constructor(private util: UtilsService,) { }

  ngOnInit() {
  }
OuvrirModal(){
  this.util.OuvrirModal(AggrandirmaisonPage, ['inset-modal', 'radius-modal']);
}
}
