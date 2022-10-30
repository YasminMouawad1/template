import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentTypesComponent } from './employment-types.component';

describe('EmploymentTypesComponent', () => {
  let component: EmploymentTypesComponent;
  let fixture: ComponentFixture<EmploymentTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
