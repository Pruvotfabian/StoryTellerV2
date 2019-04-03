import { TestBed } from '@angular/core/testing';

import { AureliaService } from './aurelia.service';

describe('AureliaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AureliaService = TestBed.get(AureliaService);
    expect(service).toBeTruthy();
  });
});
