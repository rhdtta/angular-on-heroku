import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page.component';
import { DropListComponent } from './drop-list.component';
import { LocationComponent } from './location.component';
import { EquipmentComponent } from './equipment.component';
import { CategoryWindowComponent } from './category-window/category-window.component';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DropListComponent,
    LocationComponent,
    EquipmentComponent,
    CategoryWindowComponent,
    SubComponentComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
