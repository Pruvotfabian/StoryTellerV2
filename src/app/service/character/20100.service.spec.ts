import { TestBed } from '@angular/core/testing';

import { 20100Service } from './20100.service';

describe('20100Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: 20100Service = TestBed.get(20100Service);
    expect(service).toBeTruthy();
  });
});
