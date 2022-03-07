import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddthirdcategoryComponent } from './addthirdcategory.component';

describe('AddthirdcategoryComponent', () => {
  let component: AddthirdcategoryComponent;
  let fixture: ComponentFixture<AddthirdcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddthirdcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddthirdcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
