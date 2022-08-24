import { Component } from '@angular/core';

@Component({
  selector: 'app-propriete',
  templateUrl: 'propriete.page.html',
  styleUrls: ['propriete.page.scss']
})
export class ProprietePage {
  profile : string;
  constructor() {
    this.profile = "tout";
  }

}
