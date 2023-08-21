import { TestBed } from '@angular/core/testing';

import { LibaService } from './liba.service';

describe('LibaService', () => {
  let service: LibaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
