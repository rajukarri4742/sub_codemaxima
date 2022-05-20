import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewhereComponent } from './updatewhere.component';

describe('UpdatewhereComponent', () => {
  let component: UpdatewhereComponent;
  let fixture: ComponentFixture<UpdatewhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatewhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatewhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
