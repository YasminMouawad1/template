import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarBrandComponent } from './add-car-brand.component';

describe('AddCarBrandComponent', () => {
  let component: AddCarBrandComponent;
  let fixture: ComponentFixture<AddCarBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
