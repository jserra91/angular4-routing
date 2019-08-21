import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service1/service1.service';

@Component({
   selector: 'app-new-cmp',
   templateUrl: './component1.component.html',
   styleUrls: []
})

export class NewCmpComponent2 implements OnInit {
   newcomponent = "Entered in new component created - component 2";
   constructor(private servicio: MyserviceService) {}
   ngOnInit() {
      console.log('1 name in NewCmpComponent2 : ' + this.servicio.interface.name);
      this.servicio.setName('Joan');
      console.log('2 name in NewCmpComponent2 : ' + this.servicio.interface.name);
   }
}
