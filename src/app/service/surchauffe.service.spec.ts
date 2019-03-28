import { TestBed } from '@angular/core/testing';

import { SurchauffeService } from './surchauffe.service';

describe('SurchauffeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurchauffeService = TestBed.get(SurchauffeService);
    expect(service).toBeTruthy();
  });
});
