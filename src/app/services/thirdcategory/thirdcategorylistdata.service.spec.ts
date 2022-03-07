import { TestBed } from '@angular/core/testing';

import { ThirdcategorylistdataService } from './thirdcategorylistdata.service';

describe('ThirdcategorylistdataService', () => {
  let service: ThirdcategorylistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdcategorylistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
