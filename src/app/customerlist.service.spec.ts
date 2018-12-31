import { TestBed } from '@angular/core/testing';

import { CustomerlistService } from './customerlist.service';

describe('CustomerlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerlistService = TestBed.get(CustomerlistService);
    expect(service).toBeTruthy();
  });
});
