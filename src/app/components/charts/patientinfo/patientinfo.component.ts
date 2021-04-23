import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA = [
  {States: 'California', Total_Cases: '3,728,396', Total_Deaths: '61,308', Total_Recovered: (Math.floor(1000 + Math.random() * 90000)), Active_Cases: '16,848', Total_Tests: '8,948,654', Population:'5,639,632'}
  , {States: 'Texas', Total_Cases: '2,871,442', Total_Deaths: '50,041', Total_Recovered: (Math.floor(500 + Math.random() * 90000)), Active_Cases: '182,310', Total_Tests: '2,608,683',Population:'4,903,185'}
  , {States: 'Florida', Total_Cases: '2,191,038', Total_Deaths: '34,712', Total_Recovered: (Math.floor(1000 + Math.random() * 90000)), Active_Cases: '113,227', Total_Tests: '2,862,393',Population:'5,758,736'}
  , {States: 'New York', Total_Cases: '2,063,812', Total_Deaths: '52,090', Total_Recovered: (Math.floor(1000 + + Math.random() * 90000)), Active_Cases: 'N/A', Total_Tests: '6,882,476', Population:'4,648,794'}
  , {States: 'New Jersey', Total_Cases: '1,312,722', Total_Deaths: '24,056', Total_Recovered: (Math.floor(5000 + + Math.random() * 90000)), Active_Cases: '10,235', Total_Tests: '3,969,315',Population:'3,956,971'}
  , {States: 'Ohio', Total_Cases: '1,128,145', Total_Deaths: '25,989', Total_Recovered: (Math.floor(1000 + Math.random() * 90000)), Active_Cases: '421,251', Total_Tests: '9,432,069',Population:'6,045,680'}

];

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.scss']
})
export class PatientinfoComponent implements OnInit {
  displayedColumns: string[] = ['States', 'Total_Cases', 'Total_Deaths', 'Total_Recovered', 'Active_Cases', 'Total_Tests', 'Population'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

}
