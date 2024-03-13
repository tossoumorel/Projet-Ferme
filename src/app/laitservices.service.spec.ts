import { TestBed } from '@angular/core/testing';

import { LaitservicesService } from './laitservices.service';

describe('LaitservicesService', () => {
  let service: LaitservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaitservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
