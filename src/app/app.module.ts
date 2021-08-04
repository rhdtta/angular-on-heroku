import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page.component';
import { DropListComponent } from './drop-list.component';
import { LocationComponent } from './location.component';
import { EquipmentComponent } from './equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DropListComponent,
    LocationComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
