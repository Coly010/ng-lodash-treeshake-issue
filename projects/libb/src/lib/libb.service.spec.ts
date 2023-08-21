import { TestBed } from '@angular/core/testing';

import { LibbService } from './libb.service';

describe('LibbService', () => {
  let service: LibbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
