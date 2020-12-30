import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCenterDetailsComponent } from './service-center-details.component';

describe('ServiceCenterDetailsComponent', () => {
  let component: ServiceCenterDetailsComponent;
  let fixture: ComponentFixture<ServiceCenterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCenterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
