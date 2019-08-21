import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewCmpComponent1 } from './component1/component1.component';
import { NewCmpComponent2 } from './component2/component1.component';
import { MyserviceService } from './service1/service1.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent1,
    NewCmpComponent2
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp1',
         component: NewCmpComponent1
      },
      {
        path: 'new-cmp2',
        component: NewCmpComponent2
     }
   ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
