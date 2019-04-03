import { TestBed } from '@angular/core/testing';

import { EnorcbesService } from './enorcbes.service';

describe('EnorcbesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnorcbesService = TestBed.get(EnorcbesService);
    expect(service).toBeTruthy();
  });
});
