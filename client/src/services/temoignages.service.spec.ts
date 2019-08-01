import { TestBed } from '@angular/core/testing';

import { TemoignagesService } from './temoignages.service';

describe('TemoignagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemoignagesService = TestBed.get(TemoignagesService);
    expect(service).toBeTruthy();
  });
});
