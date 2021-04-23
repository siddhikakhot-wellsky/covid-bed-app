import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19dashboardComponent } from './components/covid-19-dashboard/covid19dashboard/covid19dashboard.component';
import { CovidDetailsDataComponent } from './components/covid-details-data/covid-details-data.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'dashboard', component: Covid19dashboardComponent },
  {
    path: 'HospitalBeds', component:HomeComponent
  },
  {
    path: 'covidDetails/:id', component:CovidDetailsDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
