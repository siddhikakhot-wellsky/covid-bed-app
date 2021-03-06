import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid19dashboard',
  templateUrl: './covid19dashboard.component.html',
  styleUrls: ['./covid19dashboard.component.scss']
})
export class Covid19dashboardComponent {
  
  miniCardData = [];

cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         columns: 1,
         miniCard: { cols: 1, rows: 1 },
         chart: { cols: 1, rows: 2 },
         table: { cols: 1, rows: 4 },
       };
     }

    return {
       columns: 4,
       miniCard: { cols: 1, rows: 1 },
       chart: { cols: 2, rows: 2 },
       table: { cols: 4, rows: 4 },
     };
   })
 );


  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit() {
  } 

  navigateTo(){
    this.router.navigate(['Beds'])
  }
}
