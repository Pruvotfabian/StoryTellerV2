import { TestBed } from '@angular/core/testing';

import { NaibafService } from './naibaf.service';

describe('NaibafService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaibafService = TestBed.get(NaibafService);
    expect(service).toBeTruthy();
  });
});
