import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchauffeComponent } from './surchauffe.component';

describe('SurchauffeComponent', () => {
  let component: SurchauffeComponent;
  let fixture: ComponentFixture<SurchauffeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurchauffeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurchauffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
