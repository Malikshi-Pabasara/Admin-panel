import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartProfileComponent } from './sparepart-profile.component';

describe('SparepartProfileComponent', () => {
  let component: SparepartProfileComponent;
  let fixture: ComponentFixture<SparepartProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparepartProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparepartProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
