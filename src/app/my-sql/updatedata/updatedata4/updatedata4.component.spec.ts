import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatedata4Component } from './updatedata4.component';

describe('Updatedata4Component', () => {
  let component: Updatedata4Component;
  let fixture: ComponentFixture<Updatedata4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updatedata4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Updatedata4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
