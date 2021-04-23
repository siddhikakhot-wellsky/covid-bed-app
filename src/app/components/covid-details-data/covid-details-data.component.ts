import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

export interface Filter1 {
  value: string;
  viewValue: string;
}

export interface ITableFilter{
  column: any;
  value: any;
}

export interface HospitalData {
  Hospital: string;
  Last_Updated: string;
  Total: number;
  Vacant: number;
  Contact: string;
  County: string;
}
const ELEMENT_DATA: HospitalData[] = [
  {Hospital: 'Test One', Last_Updated: '21/04/2021', Total: 1000, Vacant: (Math.floor(100 + Math.random() * 900)), Contact: '982082137', County: 'XYZ'}
  , {Hospital: 'Test Two', Last_Updated: '21/04/2021', Total: 2000, Vacant: (Math.floor(Math.random() * 9)), Contact: '982082137', County: 'ABC'}
  , {Hospital: 'Test Three', Last_Updated: '21/04/2021', Total: 1500, Vacant: (Math.floor(Math.random() * 0)), Contact: '982082137', County: 'XYZ'}

];

const ELEMENT_DATA_ICU: HospitalData[] = [
  {Hospital: 'Test One ICU', Last_Updated: '21/04/2021', Total: 100, Vacant: (Math.floor(1 + Math.random() * (4 - 1 + 1))), Contact: '982082137', County: 'XYZ'}
  , {Hospital: 'Test Two ICU', Last_Updated: '21/04/2021', Total: 100, Vacant: (Math.floor(5 + Math.random() * (10-5))), Contact: '982082137', County: 'ABC'}
  , {Hospital: 'Test Three ICU', Last_Updated: '21/04/2021', Total: 100, Vacant: (Math.floor(Math.random() * (1-0))), Contact: '982082137', County: 'XYZ'}

];


@Component({
  selector: 'app-covid-details-data',
  templateUrl: './covid-details-data.component.html',
  styleUrls: ['./covid-details-data.component.scss']
})
export class CovidDetailsDataComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataLoaded = false;
  dataSource = new MatTableDataSource();
  hospitals: Filter1[] = [{value: 'Test One', viewValue: 'Test One'}];
  counties: Filter1[] = [{value: 'XYZ', viewValue: 'XYZ'}];
  displayedColumns: string[] = ['Hospital', 'Last_Updated', 'Total', 'Vacant', 'Contact', 'County'];
  formGroup: FormGroup;
  id: any;
  title: string;
  covidMoreBeds: string;
  covidLessBeds: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.formGroup = this.fb.group({
      Hospital: '',
      County: ''
  });
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    window.setTimeout(function() {
      window.location.reload();
    }, 30000);
   this.getData();
  }

  getData(): void{
    if (this.id == 1){
      this.title = 'Covid 19 Beds';
      this.covidLessBeds = 'Less than 50 beds';
      this.covidMoreBeds = '50 or more beds';
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    else {
      this.title = 'Covid 19 ICU Beds';
      this.covidLessBeds = 'Less than 5 beds';
      this.covidMoreBeds = '5 or more beds';
      this.dataSource = new MatTableDataSource(ELEMENT_DATA_ICU);
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchFilters(value): void{
    this.dataSource.filter = value;
  }

  customFilterPredicate(data: any, filters: any): boolean {
    for (let i = 0; i < filters.length; i++) {
      let fitsThisFilter = false;
      fitsThisFilter = data[filters[i].column].toLowerCase().includes(filters[i].value.toLowerCase());

      if (!fitsThisFilter){
        return false;
      }
    }
    return true;
  }

  getTotal(): number{
    if (this.id == 1){
      return ELEMENT_DATA.map(x => x.Total).reduce((prev, curr) => prev + curr, 0);
    }
    else{
      return ELEMENT_DATA_ICU.map(x => x.Total).reduce((prev, curr) => prev + curr, 0);
    }
  }

  getVacantTotal(): number{
    if (this.id == 1){
      return ELEMENT_DATA.map(x => x.Vacant).reduce((prev, curr) => prev + curr , 0);
    }
    else{
      return ELEMENT_DATA_ICU.map(x => x.Vacant).reduce((prev, curr) => prev + curr , 0);
    }
  }

  getVacantBeds(): void{
    let filteredData: HospitalData[] = [];
    if (this.id == 1) {
      filteredData = ELEMENT_DATA.filter(x => x.Vacant >= 50);
    }
    else{
      filteredData = ELEMENT_DATA_ICU.filter(x => x.Vacant >= 5);
    }
    this.dataSource = new MatTableDataSource(filteredData);
  }

  applyFilters(): void{
    const filtername: ITableFilter | any = [];
    Object.keys(this.formGroup.value).forEach(key => {
    filtername.push({
      column: key,
      value: this.formGroup.get(key).value,
    });
    });
    this.dataSource.filterPredicate = this.customFilterPredicate;
    this.dataSource.filter = filtername;
  }

  refresh(): void{
    this.formGroup.reset();
    this.getData();
  }

  openMaps(){
    this.router.navigateByUrl('/maps?lat=51.673858&long=7.815982');
  }
}
