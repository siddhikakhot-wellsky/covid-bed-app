import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDetailsDataComponent } from './covid-details-data.component';

describe('CovidDetailsDataComponent', () => {
  let component: CovidDetailsDataComponent;
  let fixture: ComponentFixture<CovidDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDetailsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
