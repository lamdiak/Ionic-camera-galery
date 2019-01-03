import { Component, OnInit } from '@angular/core';
import { GaleryProvider } from '../../galeryprovider/galeryprovider';
import { NavParams, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
    selector : 'page-photopage',
    templateUrl : 'photopage.html'
})

export class PhotopagePage implements OnInit{

    name: number;
    image : string;
    constructor(private galeryProvider : GaleryProvider, private navParams : NavParams,
        public alertCtrl: AlertController,
        private navControl : NavController){
    }
    ngOnInit(){
        this.name = this.navParams.get('monImage');
        this.image = this.galeryProvider.galeries[this.name];
    }

    showConfirm() {
        const confirm = this.alertCtrl.create({
          title: 'Supprimer la photo?',
          message: 'Êtes vous sûr(e) de vouloir supprimer cette photo?',
          buttons: [
            {
              text: 'Nom',
              handler: () => {
                //console.log('Disagree clicked');
                // il se passe rien 
              }
            },
            {
              text: 'Oui',
              handler: () => {
                //console.log('Agree clicked');
                this.galeryProvider.effacer(this.name);
                this.navControl.pop();
              }
            }
          ]
        });
        confirm.present();
      }

}