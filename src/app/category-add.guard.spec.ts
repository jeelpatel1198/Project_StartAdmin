import { TestBed } from '@angular/core/testing';

import { CategoryAddGuard } from './category-add.guard';

describe('CategoryAddGuard', () => {
  let guard: CategoryAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CategoryAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
