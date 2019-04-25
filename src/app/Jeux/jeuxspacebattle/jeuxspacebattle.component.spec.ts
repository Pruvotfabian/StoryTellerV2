import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxspacebattleComponent } from './jeuxspacebattle.component';

describe('JeuxspacebattleComponent', () => {
  let component: JeuxspacebattleComponent;
  let fixture: ComponentFixture<JeuxspacebattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxspacebattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxspacebattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
