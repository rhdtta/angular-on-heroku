import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { SubComponentComponent } from './sub-component/sub-component.component';

const routes: Routes = [
  {path: ':location', component: LocationComponent},
  {path: ':location/:branch', component: LocationComponent},
  {path: ':location/:branch/:category', component: SubComponentComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
