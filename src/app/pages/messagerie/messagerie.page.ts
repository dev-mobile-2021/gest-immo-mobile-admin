import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
})
export class MessageriePage implements OnInit {

  profile : string;
  constructor() {
    this.profile = "annonce";
  }


  ngOnInit() {
  }

}
