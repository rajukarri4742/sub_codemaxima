import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletewhereComponent } from './deletewhere.component';

describe('DeletewhereComponent', () => {
  let component: DeletewhereComponent;
  let fixture: ComponentFixture<DeletewhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletewhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletewhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
