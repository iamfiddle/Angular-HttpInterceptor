import { TestBed } from '@angular/core/testing';

import { HttpSharedIntercepterService } from './http-shared-intercepter.service';

describe('HttpSharedIntercepterService', () => {
  let service: HttpSharedIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSharedIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
