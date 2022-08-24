import { Component, OnInit } from '@angular/core';
import { UtilsService } from "src/app/services/utils.service";
@Component({
  selector: 'app-aggrandirmaison',
  templateUrl: './aggrandirmaison.page.html',
  styleUrls: ['./aggrandirmaison.page.scss'],
})
export class AggrandirmaisonPage implements OnInit {

  constructor(private util: UtilsService) { }

  ngOnInit() {
  }
fermer(){
  this.util.FermerModal()
}
}
