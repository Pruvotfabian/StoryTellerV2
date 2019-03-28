import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxPrologueComponent } from './jeux-prologue.component';

describe('JeuxPrologueComponent', () => {
  let component: JeuxPrologueComponent;
  let fixture: ComponentFixture<JeuxPrologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxPrologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxPrologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
