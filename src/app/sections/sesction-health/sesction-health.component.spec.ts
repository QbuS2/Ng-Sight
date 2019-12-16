import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesctionHealthComponent } from './sesction-health.component';

describe('SesctionHealthComponent', () => {
  let component: SesctionHealthComponent;
  let fixture: ComponentFixture<SesctionHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesctionHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesctionHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
