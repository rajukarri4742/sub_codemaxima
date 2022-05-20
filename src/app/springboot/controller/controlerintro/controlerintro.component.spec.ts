import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlerintroComponent } from './controlerintro.component';

describe('ControlerintroComponent', () => {
  let component: ControlerintroComponent;
  let fixture: ComponentFixture<ControlerintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlerintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlerintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
