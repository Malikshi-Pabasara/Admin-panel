import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartDetailsComponent } from './spare-part-details.component';

describe('SparePartDetailsComponent', () => {
  let component: SparePartDetailsComponent;
  let fixture: ComponentFixture<SparePartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparePartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparePartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
