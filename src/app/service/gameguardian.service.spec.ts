import { TestBed } from '@angular/core/testing';

import { GameguardianService } from './gameguardian.service';

describe('GameguardianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameguardianService = TestBed.get(GameguardianService);
    expect(service).toBeTruthy();
  });
});
