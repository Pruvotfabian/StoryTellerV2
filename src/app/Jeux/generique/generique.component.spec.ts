import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriqueComponent } from './generique.component';

describe('GeneriqueComponent', () => {
  let component: GeneriqueComponent;
  let fixture: ComponentFixture<GeneriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
