import { TestInterface } from './../interface1/interface1.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

    interface: TestInterface;

   constructor() {
       this.interface = {
           name: 'Jordi',
           years: 27,
           char: 'hello world'
       };
   }

   public getInterface(): TestInterface {
       return this.interface;
   }

   public setName(vname: string): void {
    this.interface.name = vname;
    }
}
