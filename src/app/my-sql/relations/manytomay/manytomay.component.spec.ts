import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManytomayComponent } from './manytomay.component';

describe('ManytomayComponent', () => {
  let component: ManytomayComponent;
  let fixture: ComponentFixture<ManytomayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManytomayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManytomayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
