import { TestBed } from '@angular/core/testing';

import { CategorylistdataService } from './categorylistdata.service';

describe('CategorylistdataService', () => {
  let service: CategorylistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorylistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
