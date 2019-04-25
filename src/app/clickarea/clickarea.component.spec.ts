import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickareaComponent } from './clickarea.component';

describe('ClickareaComponent', () => {
  let component: ClickareaComponent;
  let fixture: ComponentFixture<ClickareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
