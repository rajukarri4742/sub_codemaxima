import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractclassComponent } from './abstractclass.component';

describe('AbstractclassComponent', () => {
  let component: AbstractclassComponent;
  let fixture: ComponentFixture<AbstractclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
