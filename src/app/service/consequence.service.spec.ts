import { TestBed } from '@angular/core/testing';

import { ConsequenceService } from './consequence.service';

describe('ConsequenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsequenceService = TestBed.get(ConsequenceService);
    expect(service).toBeTruthy();
  });
});
