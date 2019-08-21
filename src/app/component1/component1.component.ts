import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service1/service1.service';

@Component({
   selector: 'app-new-cmp',
   templateUrl: './component1.component.html',
   styleUrls: []
})

export class NewCmpComponent1 implements OnInit {
   newcomponent = "Entered in new component created - component 1";
   constructor(private servicio: MyserviceService) {}
   ngOnInit() {
      console.log('1 name in NewCmpComponent1 : ' + this.servicio.interface.name);
      this.servicio.setName('josep');
      console.log('2 name in NewCmpComponent1 : ' + this.servicio.interface.name);
   }
}