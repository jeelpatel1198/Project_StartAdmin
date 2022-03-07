import { TestBed } from '@angular/core/testing';

import { BrandlistdataService } from './brandlistdata.service';

describe('BrandlistdataService', () => {
  let service: BrandlistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandlistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
