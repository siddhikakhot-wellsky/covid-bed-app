import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidDetailsDataComponent } from './components/covid-details-data/covid-details-data.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { Covid19dashboardComponent } from './components/covid-19-dashboard/covid19dashboard/covid19dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './components/navigation/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from './components/cards/card/card.component';
import { ConfirmedCasesComponent } from './components/charts/confirmed-cases/confirmed-cases.component';
import { GlobalSummaryComponent } from './components/charts/global-summary/global-summary.component';
import { ConfirmedBycountryComponent } from './components/charts/confirmed-bycountry/confirmed-bycountry.component';
import { TotalSuppliesComponent } from './components/charts/total-supplies/total-supplies.component';
import { MiniCardComponent } from './components/cards/mini-cards/mini-card/mini-card.component';
import { PatientinfoComponent } from './components/charts/patientinfo/patientinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CovidDetailsDataComponent,
    Covid19dashboardComponent,
    NavComponent,
    CardComponent,
    ConfirmedCasesComponent,
    GlobalSummaryComponent,
    ConfirmedBycountryComponent,
    TotalSuppliesComponent,
    MiniCardComponent,
    PatientinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    ChartsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
