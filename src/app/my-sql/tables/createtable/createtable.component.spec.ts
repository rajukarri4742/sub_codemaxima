import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetableComponent } from './createtable.component';

describe('CreatetableComponent', () => {
  let component: CreatetableComponent;
  let fixture: ComponentFixture<CreatetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
