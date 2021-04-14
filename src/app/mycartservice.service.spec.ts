import { TestBed } from '@angular/core/testing';

import { MycartserviceService } from './mycartservice.service';

describe('MycartserviceService', () => {
  let service: MycartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
