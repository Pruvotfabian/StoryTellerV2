import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxFinalBattleComponent } from './jeux-final-battle.component';

describe('JeuxFinalBattleComponent', () => {
  let component: JeuxFinalBattleComponent;
  let fixture: ComponentFixture<JeuxFinalBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxFinalBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxFinalBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
