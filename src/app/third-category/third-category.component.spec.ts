import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCategoryComponent } from './third-category.component';

describe('ThirdCategoryComponent', () => {
  let component: ThirdCategoryComponent;
  let fixture: ComponentFixture<ThirdCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
