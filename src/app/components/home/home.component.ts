import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = true;
  vacantCount = Math.floor(1000 + Math.random() * 9000);
  vacantICUCount = Math.floor(100 + Math.random() * 900);
  occupiedCount = Math.floor(1000 + Math.random() * 9000);
  occupiedICUCount = Math.floor(100 + Math.random() * 900);
  totalCount = this.occupiedCount + this.vacantCount;
  totalICUCount = this.occupiedICUCount + this.vacantICUCount;

  constructor(private router: Router) {
   }

  ngOnInit(): void {
    window.setTimeout(function () {
      console.log("called")
      window.location.reload();
    }, 30000);
  }

  onChange(value: any): void {
    console.log(value);
  }

  navigateTo(): void{
    this.router.navigateByUrl('/dashboard/1');
  }

  navigateToICU(): void{
    this.router.navigateByUrl('/dashboard/2');
  }
}
