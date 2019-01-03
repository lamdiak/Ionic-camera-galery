import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GaleryProvider } from '../../galeryprovider/galeryprovider';


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage implements OnInit{

  imageUrl : string;
  photos : string[]=[];

  constructor(private camera : Camera, private galeryProvider : GaleryProvider){
  }

  ngOnInit(){
    this.photos = this.galeryProvider.galeries;
  }

  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
    this.imageUrl = 'data:image/jpeg;base64,'+imageData;
            this.galeryProvider.galeries.push(this.imageUrl); 
            //this.galeryProvider.galeries.reverse(); 
    }, (err) => {
            // Handle error
            console.log(err);
      });
    }

  
}
