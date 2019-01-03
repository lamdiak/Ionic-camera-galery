import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { GaleryProvider } from '../../galeryprovider/galeryprovider';
import { PhotopagePage } from '../photopage/photopage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  photos : string[]=[];
  //isEmpty: boolean;
   index: number;

  constructor(public navCtrl: NavController, private galeryProvider : GaleryProvider) {
  }


  ngOnInit(){
    this.photos = this.galeryProvider.galeries;
    //this.isEmpty = this.galeryProvider.emptyTab();
   
  }

  affichage(): boolean {
    return this.galeryProvider.emptyTab();
  }

  onGoToPhotopage(index) {
    this.navCtrl.push(PhotopagePage, {monImage : index});
  }
  
  
  
}
