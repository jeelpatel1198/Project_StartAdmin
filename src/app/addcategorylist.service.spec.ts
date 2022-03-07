import { TestBed } from '@angular/core/testing';

import { AddcategorylistService } from './addcategorylist.service';

describe('AddcategorylistService', () => {
  let service: AddcategorylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcategorylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
