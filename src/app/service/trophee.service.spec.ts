import { TestBed } from '@angular/core/testing';

import { TropheeService } from './trophee.service';

describe('TropheeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TropheeService = TestBed.get(TropheeService);
    expect(service).toBeTruthy();
  });
});
