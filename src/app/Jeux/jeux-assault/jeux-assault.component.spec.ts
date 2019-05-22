import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxAssaultComponent } from './jeux-assault.component';

describe('JeuxAssaultComponent', () => {
  let component: JeuxAssaultComponent;
  let fixture: ComponentFixture<JeuxAssaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxAssaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxAssaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
