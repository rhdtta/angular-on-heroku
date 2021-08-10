import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AllSubcategoriesComponent } from './all-subcategories/all-subcategories.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SubComponentComponent } from './sub-component/sub-component.component';

const routes: Routes = [
  {path: 'home',  component: HomepageComponent},
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: ':location', component: AllCategoriesComponent},
  {path: ':location/All/:category', component: AllSubcategoriesComponent},
  {path: ':location/:branch', component: CategoriesComponent},
  {path: ':location/:branch/:category', component: SubComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
