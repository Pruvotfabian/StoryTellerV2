import { TestBed } from '@angular/core/testing';

import { ChristophhisService } from './christophhis.service';

describe('ChristophhisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChristophhisService = TestBed.get(ChristophhisService);
    expect(service).toBeTruthy();
  });
});
