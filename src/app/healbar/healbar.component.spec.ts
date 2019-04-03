import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealbarComponent } from './healbar.component';

describe('HealbarComponent', () => {
  let component: HealbarComponent;
  let fixture: ComponentFixture<HealbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
