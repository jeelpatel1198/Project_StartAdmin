import { TestBed } from '@angular/core/testing';

import { SubcategorylistdataService } from './subcategorylistdata.service';

describe('SubcategorylistdataService', () => {
  let service: SubcategorylistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategorylistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
