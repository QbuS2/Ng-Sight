import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesctionOrdersComponent } from './sesction-orders.component';

describe('SesctionOrdersComponent', () => {
  let component: SesctionOrdersComponent;
  let fixture: ComponentFixture<SesctionOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesctionOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesctionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
