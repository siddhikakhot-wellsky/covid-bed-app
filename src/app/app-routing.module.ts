import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidDetailsDataComponent } from './components/covid-details-data/covid-details-data.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard/:id',
    component: CovidDetailsDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
