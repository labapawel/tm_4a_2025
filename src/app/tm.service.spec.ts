import { TestBed } from '@angular/core/testing';

import { TmService } from './tm.service';

describe('TmService', () => {
  let service: TmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
