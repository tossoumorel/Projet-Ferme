import { TestBed } from '@angular/core/testing';

import { CharcuterieService } from '../Services/charcuterie.service';

describe('CharcuterieService', () => {
  let service: CharcuterieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharcuterieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
