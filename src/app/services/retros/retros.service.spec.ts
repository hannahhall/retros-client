import { TestBed } from '@angular/core/testing';

import { RetrosService } from './retros.service';

describe('RetrosService', () => {
  let service: RetrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
