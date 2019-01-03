import { Injectable } from "@angular/core";


@Injectable()

export class GaleryProvider {
    galeries : string[]=[]; 

    emptyTab() : boolean{
        return this.galeries.length===0
            
    }
    
    effacer(i:number) {
        delete this.galeries[i];
    }
}