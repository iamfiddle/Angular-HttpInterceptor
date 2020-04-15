import { TestBed } from '@angular/core/testing';

import { HttpLogService } from './http-log.service';

describe('HttpLogService', () => {
  let service: HttpLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
