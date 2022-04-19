import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSavedBooksComponent } from './get-saved-books.component';

describe('GetSavedBooksComponent', () => {
  let component: GetSavedBooksComponent;
  let fixture: ComponentFixture<GetSavedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSavedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSavedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
