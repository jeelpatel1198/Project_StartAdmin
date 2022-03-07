import { TestBed } from '@angular/core/testing';

import { ProductlistdataService } from './productlistdata.service';

describe('ProductlistdataService', () => {
  let service: ProductlistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
