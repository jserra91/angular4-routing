import { MyserviceService } from './service1/service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private servicio: MyserviceService) {}

  ngOnInit(): void {
    console.log('1 name in app : ' + this.servicio.interface.name);
    this.servicio.setName('pep');
    console.log('2 name in app : ' + this.servicio.interface.name);
  }

  save(): void {
    console.log('Save name in app : ' + this.servicio.interface.name);
  }
}
