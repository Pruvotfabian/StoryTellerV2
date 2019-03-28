import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxEpilogueComponent } from './jeux-epilogue.component';

describe('JeuxEpilogueComponent', () => {
  let component: JeuxEpilogueComponent;
  let fixture: ComponentFixture<JeuxEpilogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxEpilogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxEpilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
