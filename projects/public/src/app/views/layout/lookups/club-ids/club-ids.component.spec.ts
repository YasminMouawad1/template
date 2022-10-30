import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubIdsComponent } from './club-ids.component';

describe('ClubIdsComponent', () => {
  let component: ClubIdsComponent;
  let fixture: ComponentFixture<ClubIdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubIdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
