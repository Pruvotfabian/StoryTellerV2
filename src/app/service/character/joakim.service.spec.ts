import { TestBed } from '@angular/core/testing';

import { JoakimService } from './joakim.service';

describe('JoakimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoakimService = TestBed.get(JoakimService);
    expect(service).toBeTruthy();
  });
});
