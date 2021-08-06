import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationComponent } from './location.component';
import { SubComponentComponent } from './sub-component/sub-component.component';

const routes: Routes = [
  {path: 'home',  component: HomepageComponent},
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: ':location', component: LocationComponent},
  {path: ':location/:branch', component: LocationComponent},
  {path: ':location/:branch/:category', component: SubComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
