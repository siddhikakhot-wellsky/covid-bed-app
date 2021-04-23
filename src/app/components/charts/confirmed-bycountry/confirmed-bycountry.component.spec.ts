import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedBycountryComponent } from './confirmed-bycountry.component';

describe('ConfirmedBycountryComponent', () => {
  let component: ConfirmedBycountryComponent;
  let fixture: ComponentFixture<ConfirmedBycountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedBycountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedBycountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
