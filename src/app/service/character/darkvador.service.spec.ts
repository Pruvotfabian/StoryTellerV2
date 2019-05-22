import { TestBed } from '@angular/core/testing';

import { DarkvadorService } from './darkvador.service';

describe('DarkvadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DarkvadorService = TestBed.get(DarkvadorService);
    expect(service).toBeTruthy();
  });
});
