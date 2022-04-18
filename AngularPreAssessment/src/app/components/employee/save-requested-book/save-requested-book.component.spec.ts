import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRequestedBookComponent } from './save-requested-book.component';

describe('SaveRequestedBookComponent', () => {
  let component: SaveRequestedBookComponent;
  let fixture: ComponentFixture<SaveRequestedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRequestedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRequestedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
