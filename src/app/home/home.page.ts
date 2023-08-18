import {MatTabsModule} from '@angular/material/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  changepage:any='home'
  constructor(private router:Router) {}


agregar_transaccion(){

  this.router.navigate(['agregar-transaccion']);
  console.log("Abierto");

}

}
