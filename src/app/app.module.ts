import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AllSubcategoriesComponent } from './all-subcategories/all-subcategories.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SubComponentComponent,
    AllCategoriesComponent,
    HomepageComponent,
    NavigationComponent,
    AllSubcategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
