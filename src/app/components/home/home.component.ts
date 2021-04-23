import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = true;
  DomesticCount = 0;
  IntraCount = 0;
  IntnCount = 0;
  Total = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
