import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19dashboardComponent } from './components/covid-19-dashboard/covid19dashboard/covid19dashboard.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'dashboard', component: Covid19dashboardComponent }
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
