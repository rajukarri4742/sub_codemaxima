import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateindexComponent } from './createindex.component';

describe('CreateindexComponent', () => {
  let component: CreateindexComponent;
  let fixture: ComponentFixture<CreateindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
