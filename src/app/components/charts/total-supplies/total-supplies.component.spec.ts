import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSuppliesComponent } from './total-supplies.component';

describe('TotalSuppliesComponent', () => {
  let component: TotalSuppliesComponent;
  let fixture: ComponentFixture<TotalSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSuppliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
