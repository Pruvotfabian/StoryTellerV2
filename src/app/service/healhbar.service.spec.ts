import { TestBed } from '@angular/core/testing';

import { HealhbarService } from './healhbar.service';

describe('HealhbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealhbarService = TestBed.get(HealhbarService);
    expect(service).toBeTruthy();
  });
});
