import { TestBed } from '@angular/core/testing';

import { EnemisService } from './enemis.service';

describe('EnemisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnemisService = TestBed.get(EnemisService);
    expect(service).toBeTruthy();
  });
});
