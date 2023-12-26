import { TestBed } from '@angular/core/testing';

import { GlobalContextService } from './global-context.service';

describe('GlobalContextService', () => {
  let service: GlobalContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
