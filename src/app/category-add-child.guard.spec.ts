import { TestBed } from '@angular/core/testing';

import { CategoryAddChildGuard } from './category-add-child.guard';

describe('CategoryAddChildGuard', () => {
  let guard: CategoryAddChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CategoryAddChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
