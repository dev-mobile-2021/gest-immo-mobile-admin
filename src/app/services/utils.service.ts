import { Injectable } from '@angular/core';
import { LoadingController,AlertController,ToastController,ModalController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private loadingController:LoadingController,public modalCtrl: ModalController, public alertController: AlertController,private toastController: ToastController ,) 
  
  { }

  async OuvrirModal(pageName, css: string[]) {
    const modal = await this.modalCtrl.create({
      component: pageName,
      cssClass: css // Global.scss
    });
    await modal.present();
  }

  FermerModal(){
    this.modalCtrl.dismiss();
  }
  
}
